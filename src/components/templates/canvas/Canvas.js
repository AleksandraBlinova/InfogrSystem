import React, { useState, useEffect, useRef } from "react";

import AlertTitle from "@mui/material/AlertTitle";
import "./Canvas.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Alert from "@mui/material/Alert";

import { render } from "react-dom";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import Konva from "konva";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Stack from "@mui/material/Stack";

const CustomTransformer = ({ selectedShape }) => {
  const trRef = useRef();

  useEffect(() => {
    if (selectedShape) {
      trRef.current.nodes([selectedShape]);
      trRef.current.getLayer().batchDraw();
    } else {
      trRef.current.nodes([]);
    }
  }, [selectedShape]);

  return <Transformer ref={trRef} />;
};

const Canvas = (props) => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  useEffect(() => {
    document.addEventListener("keydown", props.handleClickKeyDown);
    return () => {
      document.removeEventListener("keydown", props.handleClickKeyDown);
    };
  });

  const handleClick = (event) => {
    //прослушка на выбранность рамки вокруг объекта
    if (event.toElement.toString() != "[object HTMLCanvasElement]")
      props.setSelectedShape(null);
  };

  const handleCloseAlert = () => {
    var alertt = document.getElementById("alertError");
    alertt.style.display = "none";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "500px",
          height: "600px",
        }}
      >
        <Paper
          className="canvas"
          elevation={3}
          sx={{
            width: "420px",
            height: "580px",
            borderRadius: "0px",
          }}
        >
          {!props.openedFirstTime && props.imagePaperActiveType == "" && (
            <Alert severity="error" id="alertError" onClose={handleCloseAlert}>
              Неподдерживаемый формат файла
            </Alert>
          )}
          {props.previewUrl && (
            <div className="image" id="imageCanvasForRect">
              <Stage width={420} height={580}>
                <Layer>
                  {props.allImagesOnStage.map((object) => {
                    if (object.type === "image") {
                      console.log("object", object);
                      return (
                        <Image
                          key={object.id}
                          x={object.x}
                          y={object.y}
                          image={object.image}
                          draggable={true}
                          onClick={(e) => {
                            props.setSelectedShape(e.target);
                          }}
                        />
                      );
                    }
                    return null;
                  })}
                  <CustomTransformer selectedShape={props.selectedShape} />
                </Layer>
              </Stage>
            </div>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default Canvas;
