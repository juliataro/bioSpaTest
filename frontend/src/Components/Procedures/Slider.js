import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 42px;
`;

function RangeSlider(props) {
  //const  [price, setPrice] = React.useState([20, 37]);
  const { pricesValue, setPricesValue } = props;
  const [value, setValue] = React.useState(30); // Defolt price

  // Function catching input changes
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  // Function passing new value in slider
  const handleSliderChange = (event, newValues) => {
    setValue(newValues);
    setPricesValue(newValues === "" ? "" : Number(newValues));
    console.log(pricesValue);
  };

  // Every time you get out of focus from the input field, the event will trigger

  return (
    <Box xs={12} sm={6} md={10}>
      <Typography id="input-slider" gutterBottom>
        Hind
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 30}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            // onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default RangeSlider;
