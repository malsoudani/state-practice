import React from "react";
import Home from "./experiences/Home";
import { StyledEngineProvider } from "@mui/material";
import { ColorStateProvider } from "./experiences/ColorContext";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ColorStateProvider>
        <Home />
      </ColorStateProvider>
      {/* <div>Hello</div> */}
    </StyledEngineProvider>
  );
}

export default App;
