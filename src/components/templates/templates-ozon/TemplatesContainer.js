import React from "react";
import TemplatesOzonPillow from "./template-pillow/TemplateOzonPillow";
import TemplateOzonBasket from "./template-basket/TemplateOzonBasket";
import TemplateOzonKettle from "./template-kettle/TemplateOzonKettle";
import TemplateOzonKPB from "./template-KPB/TemplateOzonKPB";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TemplateOzonToilet from "./templates-ozon-toilet/TemplateOzonToilet";

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
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <TemplateOzonBasket
          handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
        />
      </Grid>
      <Grid item xs={6}>
        {" "}
        <TemplateOzonKettle
          handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
        />
      </Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <TemplateOzonToilet
          handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
        />
      </Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <TemplateOzonKPB
          handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
        />
      </Grid>
    </Grid>
  );
};

export default TemplatesContainer;
