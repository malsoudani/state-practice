import { Box, FormControlLabel, FormGroup, Stack, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppColor } from "./ColorContext";

const Home = () => {
  return (
    <Stack direction={"row"} spacing={2} p={4}>
      <Red />
      <Green />
    </Stack>
  );
};

export default Home;

export const Red = () => {
  const { colorsReversed, setColorsReversed } = useAppColor();

  useEffect(() => {
    alert(`my state is ${colorsReversed ? "reveresd" : "not reversed"}`);
  }, [colorsReversed]);
  return (
    <Box
      sx={{
        height: "200px",
        width: "30%",
        backgroundColor: !colorsReversed ? "red" : "yellow",
        p: 2,
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={() => setColorsReversed(!colorsReversed)}
              defaultChecked
              checked={!colorsReversed}
            />
          }
          label=""
        />
      </FormGroup>
    </Box>
  );
};

export const Green = () => {
  const { colorsReversed } = useAppColor();
  return (
    <Box
      sx={{
        p: 2,
        height: "200px",
        width: "30%",
        backgroundColor: colorsReversed ? "green" : "brown",
      }}
    ></Box>
  );
};
