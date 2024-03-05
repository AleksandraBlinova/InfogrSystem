import React from "react";
import TemplatesOzonPillow from "./template-pillow/TemplateOzonPillow";
import TemplateOzonBasket from "./template-basket/TemplateOzonBasket";
import TemplateOzonKettle from "./template-kettle/TemplateOzonKettle";
import TemplateOzonKPB from "./template-KPB/TemplateOzonKPB";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TemplateOzonToilet from "./templates-ozon-toilet/TemplateOzonToilet";
import "./TemplatesContainer.css";
import TemplateSlippers from "./template-slippers/TemplateSlippers";
import TemplateKashpo from "./template-kashpo/TemplateKashpo";
import TemplateFrame from "./template-frames/TemplateFrame";

const TemplatesContainer = ({ handleChangeClickOnUnsplash }) => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        marginTop: "20px",
      }}
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

      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <img
          src="./templatesOzon/template-matras/matras.png"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-matras/матрасбезинфогр.png",
              "tempOzonMatras"
            );
          }}
        />
      </Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <TemplateKashpo
          handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
        />
      </Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <TemplateFrame
          handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
        />
      </Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <TemplateSlippers
          handleChangeClickOnUnsplash={handleChangeClickOnUnsplash}
        />
      </Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <img
          src="./templatesOzon/template-8march/fddf1.jpg"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-8march/fddf1.jpg",
              "tempOzon8marchRassada"
            );
          }}
        />
      </Grid>
      <Grid item xs={6} sx={{ marginBottom: "20px" }}>
        <img
          src="./templatesOzon/template-8march-kpb/1 (1).jpg"
          style={{ width: "100px", height: "130px" }}
          onDoubleClick={() => {
            handleChangeClickOnUnsplash(
              "./templatesOzon/template-8march-kpb/1 (1).jpg",
              "tempOzon8marchKPB"
            );
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TemplatesContainer;
