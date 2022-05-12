import React, { useEffect } from "react";
import axios from "axios";

import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Typography from "@mui/material/Typography";

// For fetching data
import Grid from "@mui/material/Grid";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

//////////////////////////////////////////////////////////////////////////////

//  TODO Extract list of diseases from db into dropdown list
function DropDiseases(props) {
  const { diseases, setDiseases, diseasesValue, setDiseasesValue } = props;

  // Fetch Diseases in dropdown on Page load
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/diseases/all/et"
      );
      setDiseases(response.data);
    };
    loadData();
  }, [setDiseases]);

  // Handling Selected valjues
  function handleSelectChange(event, newValues) {
    setDiseasesValue(newValues.map((disease) => disease.dis_id));
    console.log(diseasesValue);
  }

  const classes = {
    dropdown: {
      marginLeft: "0rem !important",
    },
  };

  //////////////////////////////////////////////////////////////////////////////

  return (
    <Tooltip title={<Typography fontSize={20}>Valige oma haigused</Typography>}>
      <Grid container>
        <Grid item xs={12} sm={6} md={12}>
          {/* -------------------------------------------------------------------------------------------------- */}
          {/* Dropdown element */}
          <Autocomplete
            data-testid="dropDis-1" // Unit testin id
            style={classes.dropdown}
            onChange={handleSelectChange} // Handler function
            multiple={true}
            id="valueId"
            options={diseases} //useState for entity
            disableCloseOnSelect
            getOptionLabel={(option) => `${option.dis_title_et}`}
            // onChange={handleChange}
            renderOption={(props, option, { setDiseasesValue }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={setDiseasesValue} // Setting State for checked
                />
                {[option.dis_title_et]}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Haigused"
                placeholder="Vali haigused"
              />
            )}
          />
        </Grid>

        {/* -------------------------------------------------------------------------------------------------- */}
        {/* Fetching Procedures data from DataBase */}
      </Grid>
    </Tooltip>
  );
}
export default DropDiseases;
