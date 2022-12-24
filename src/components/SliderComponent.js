import React from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const SliderComponent = ({
  min,
  max,
  defaultValue,
  step,
  label,
  amount,
  currency,
}) => {
  return (
    <>
      <Stack direction="column" spacing={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h6">
          {currency} {amount}
        </Typography>
      </Stack>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {currency}
          {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {currency}
          {max}
        </Typography>
      </Stack>
    </>
  );
};

export default SliderComponent;
