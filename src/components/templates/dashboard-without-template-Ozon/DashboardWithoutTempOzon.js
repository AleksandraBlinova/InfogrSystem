import React, { useRef, useEffect } from "react";
import Canvas from "../canvas/Canvas";
import CanvasMenu from "../canvas-menu/CanvasMenu";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const DashboardWithoutTempOzon = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#FAFAFA" }}>
      <Grid width={1000} height={150} container></Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4} key={1}>
          <CanvasMenu />
        </Grid>
        <Grid item xs={2} sm={4} md={4} key={2}>
          <Canvas />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardWithoutTempOzon;
