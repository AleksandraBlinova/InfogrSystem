import React from "react";
import TemplatesOzonPillow from "./template-pillow/TemplateOzonPillow";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const TemplatesContainer = ({ handleChangeClickOnUnsplash }) => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ marginTop: "20px" }}
    >
      <Grid item xs={6}>
        <TemplatesOzonPillow
          handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
        />
      </Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}></Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}></Grid>
    </Grid>
  );
};

export default TemplatesContainer;
