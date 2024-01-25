import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./Canvas.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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
        </Paper>
      </Box>
    </>
  );
};

export default Canvas;
