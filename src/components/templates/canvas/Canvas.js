import React, { useState, useEffect, useRef } from "react";

import AlertTitle from "@mui/material/AlertTitle";
import "./Canvas.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Canvas = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Paper
          className="canvas"
          elevation={3}
          sx={{ width: "420px", height: "560px", borderRadius: "0px" }}
        >
          {props.previewUrl && (
            <div className="image">
              <img
                src={props.previewUrl}
                alt="image"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  marginTop: "0px",
                }}
              />
            </div>
          )}
          {!props.openedFirstTime && props.imagePaperActiveType == "" && (
            <Alert severity="error">
              <AlertTitle>Ошибка</AlertTitle>
              Неподдерживаемый формат файла
            </Alert>
          )}
          {props.unsplashImagesOnline && props.clickOnUnsplash && (
            <div className="image">
              <img
                src={props.clickOnUnsplash}
                alt="image"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  marginTop: "0px",
                }}
              />
            </div>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default Canvas;
