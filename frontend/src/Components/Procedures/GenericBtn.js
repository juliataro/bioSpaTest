import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const classes = {
  extractData: {
    marginTop: "0px",
  },
  icon: {
    color: "white",
  },
  searchBtn: {
    marginTop: "-3rem",
    marginBottom: "3rem",
  },
};

const GenericBtn = (props) => {
  const {
    targetsValue,
    diseasesValue,
    symptomsValue,
    pricesValue,
    loading,
    setProcedures,
  } = props;

  // Procedures on Targets And Symptoms
  const loadProcTargetsSymptoms = async () => {
    const idsTarQuery = targetsValue.map((n) => `tarIds=${n}`).join("&"); // Take props, mapp it and with query param join
    const idsSympQuery = symptomsValue.map((n) => `&sympIds=${n}`).join("&");
    const idsDisQuery = diseasesValue.map((n) => `&disIds=${n}`).join("&");

    const response = await axios.get(
      `http://localhost:4000/api/procedures/procTarSymp?${idsTarQuery}${idsSympQuery}${idsDisQuery}&priceMax=${pricesValue}`
    );

    setProcedures(response.data);
  };

  return (
    <Button
      style={classes.searchBtn}
      disabled={loading}
      spacing={5}
      onClick={() => {
        loadProcTargetsSymptoms(
          diseasesValue.disIds,
          targetsValue.tarIds,
          symptomsValue.sympIds,
          pricesValue.priceMax
        );
      }}
      variant="contained"
    >
      Otsi
    </Button>
  );
};

export default GenericBtn;
