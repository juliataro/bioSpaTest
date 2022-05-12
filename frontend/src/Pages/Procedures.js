import React, { useState } from "react";
import Grid from "@mui/material/Grid";
// import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

import DropTargets from "../Components/Procedures/DropTargets";
import DropSymptoms from "../Components/Procedures/DropSymptoms";
import DropDiseases from "../Components/Procedures/DropDiseases";
import Slider from "../Components/Procedures/Slider";

import ProceduresList from "../Components/Procedures/ProceduresList";

// import axios from "axios";

const classes = {
  root: {
    /* marginLeft: "2rem",
    marginRight: "2rem", */
  },
  intro: {
    backgroundColor: "#EDEDED",
    color: "#000000",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    margin: "auto",
  },
  sec: {
    margin: "auto",
    maxWidth: "1200px",
  },
  secTwo: {
    margin: "auto",
    maxWidth: "1200px",
    marginTop: "5rem",
    marginLeft: "-19px !important",
  },
  container: {
    width: "100%",
    display: "flex",
  },
  containerSecond: {
    width: "100%",
    display: "flex",
    marginTop: "4rem",
  },
  containerThird: {
    width: "100%",
    display: "flex",
    marginLeft: "-19px !important",
  },
  filter: {
    width: "100%",
    justifyContent: "right",
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
    marginTop: "10rem",
  },
};

/**Drop Down elements in two colomns and two rows */

export const Procedures = () => {
  const [diseases, setDiseases] = useState([]);
  const [diseasesValue, setDiseasesValue] = useState([]); // Responsible for catching chousen ID in dropdown
  const [targets, setTargets] = useState([]);
  const [targetsValue, setTargetsValue] = useState([]); // Responsible for catching chousen ID in dropdown
  const [symptoms, setSymptoms] = useState([]);
  const [symptomsValue, setSymptomsValue] = useState([]); // Responsible for catching chousen ID in dropdown
  const [procedures, setProcedures] = useState([]);
  const [selectedProc, setSelectedProc] = useState([]);
  const [pricesValue, setPricesValue] = useState([]);
 

  /**Drop
   * One variable for all useStates for passing, priceValue and procedures initia
   * */
  const obj = {
    targets,
    setTargets,
    targetsValue,
    setTargetsValue,
    diseases,
    setDiseases,
    diseasesValue,
    setDiseasesValue,
    symptoms,
    setSymptoms,
    symptomsValue,
    setSymptomsValue,
    procedures,
    setProcedures,
    pricesValue,
    setPricesValue,
    selectedProc, 
    setSelectedProc
  };

  return (
    <div style={classes.root}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        id="procedurePage"
      >
        <Grid item xs={12} style={classes.intro}>
          {/* HEADER */}
          <div style={classes.sec}>
            <Typography variant="h4" component="div" gutterBottom>
              Loodus BioSpa on eksklusiivne butiik-SPA
            </Typography>
            {/* INTRO TEXT */}
            <Typography variant="h6" component="div" gutterBottom mt={5} mb={3}>
              Oleme eksklusiivne loodusravi ja spaakeskus. Pakume erakordset
              võimalust vabanemiseks tervistkahjustavatest harjumustest – teie
              teekond ravimiteta tervisliku eluviisi poole algab siit!
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
              Pakkume teil eelnevalt valida lisahoolitsused vastavalt oma
              soovidele ja muudele filtritele teie äranägemise järgi. Võite ka
              valida soovitud ravimeetodid, täita vormi ja saata see meile posti
              teel.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div style={classes.secTwo}>
        {/*-------------------------- First row Targets and Symptoms ---------------------------- */}
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6}>
            <DropTargets {...obj} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <DropSymptoms {...obj} />
          </Grid>
        </Grid>
        {/*-------------------------- Second row Diseases and Slider ---------------------------- */}
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6}>
            <DropDiseases {...obj} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Slider {...obj} />
          </Grid>
        </Grid>
        {/*------------------------------------------------------ */}
      </div>

      {/* Procedures List component */}
      <div style={classes.secTwo}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <ProceduresList {...obj} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
