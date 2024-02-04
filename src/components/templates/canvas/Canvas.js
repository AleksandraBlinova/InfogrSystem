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
  const [selectedShape, setSelectedShape] = useState(null);

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
      setSelectedShape(null);
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
            <Alert severity="error" id="alertError">
              <AlertTitle>Ошибка</AlertTitle>
              Неподдерживаемый формат файла
            </Alert>
          )}
          {props.previewUrl && (
            <div className="image" id="imageCanvasForRect">
              <Stage width={420} height={580}>
                <Layer>
                  {props.allImagesOnStage.map((object) => {
                    if (object.type === "image") {
                      return (
                        <Image
                          key={object.id}
                          x={object.x}
                          y={object.y}
                          image={object.image}
                          draggable={true}
                          width={400}
                          height={500}
                          onClick={(e) => {
                            setSelectedShape(e.target);
                          }}
                        />
                      );
                    }
                    return null;
                  })}
                  <CustomTransformer selectedShape={selectedShape} />
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
