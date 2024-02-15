import React, { useState, useEffect, useRef } from "react";

import AlertTitle from "@mui/material/AlertTitle";
import "./Canvas.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Alert from "@mui/material/Alert";

import { render } from "react-dom";
import {
  Stage,
  Layer,
  Image,
  Transformer,
  Text,
  Rect,
  Circle,
  Star,
  Group,
  Shape,
  RegularPolygon,
  Line,
} from "react-konva";
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
                  {props.allObjectsOnStage.map((object) => {
                    if (object.type === "image") {
                      if (object.typeofImage == "figures_quadrat") {
                        return (
                          <Rect
                            fill={object.fill}
                            width={object.width}
                            height={object.height}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            key={object.id}
                            x={object.x}
                            y={object.y}
                          />
                        );
                      } else if (object.typeofImage == "figures_circle") {
                        return (
                          <Circle
                            fill={object.fill}
                            radius={45}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            key={object.id}
                            x={object.x}
                            y={object.y}
                          />
                        );
                      } else if (object.typeofImage == "figures_star") {
                        return (
                          <Star
                            fill={object.fill}
                            numPoints={5}
                            innerRadius={18}
                            outerRadius={55}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            key={object.id}
                            x={object.x}
                            y={object.y}
                          />
                        );
                      } else if (object.typeofImage == "figures_triangle") {
                        return (
                          <Line
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            points={[35, 130, 125, 130, 80, 40]}
                            closed
                            fill={object.fill}
                            key={object.id}
                            x={object.x}
                            y={object.y}
                          />
                        );
                      } else if (object.typeofImage == "figures_4angles") {
                        return (
                          <RegularPolygon
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            fill={object.fill}
                            key={object.id}
                            x={object.x}
                            y={object.y}
                            sides={5} // количество сторон пятиугольника
                            radius={50} // радиус пятиугольника
                          />
                        );
                      } else if (object.typeofImage == "figures_6angles") {
                        return (
                          <Star
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            fill={object.fill}
                            key={object.id}
                            x={object.x}
                            y={object.y}
                            numPoints={6} // количество вершин шестиугольника
                            innerRadius={30} // радиус внутренней части звезды
                            outerRadius={50} // радиус внешней части звезды
                          />
                        );
                      } else if (object.typeofImage == "figures_8angles") {
                        return (
                          <Star
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            fill={object.fill}
                            key={object.id}
                            x={object.x}
                            y={object.y}
                            numPoints={8} // количество вершин шестиугольника
                            innerRadius={35} // радиус внутренней части звезды
                            outerRadius={45} // радиус внешней части звезды
                          />
                        );
                      } else if (object.typeofImage == "figures_5angles") {
                        return (
                          <RegularPolygon
                            sides={6}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            fill={object.fill}
                            key={object.id}
                            x={object.x}
                            y={object.y}
                            radius={45}
                            rotation={0} // поворот на 30 градусов для вершины вверху
                          />
                        );
                      } else if (object.typeofImage == "lines_simple") {
                        return (
                          <Line
                            key={object.id}
                            x={0}
                            y={0}
                            points={[0, 100, 300, 100]}
                            stroke={object.stroke}
                            strokeWidth={3}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                          />
                        );
                      } else if (
                        object.typeofImage == "lines_dotted_smalldotes"
                      ) {
                        return (
                          <Line
                            points={[0, 100, 300, 100]}
                            x={0}
                            y={0}
                            stroke={object.stroke}
                            strokeWidth={3}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            dash={[5, 5]} // Шаблон пунктирной линии: 5 пикселей сплошной линии, 5 пикселей пустоты
                          />
                        );
                      } else if (
                        object.typeofImage == "lines_dotted_bigdotes"
                      ) {
                        return (
                          <Line
                            points={[0, 100, 300, 100]}
                            x={0}
                            y={0}
                            stroke={object.stroke}
                            strokeWidth={3}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            dash={[15, 8]} // Шаблон пунктирной линии: 5 пикселей сплошной линии, 5 пикселей пустоты
                          />
                        );
                      } else {
                        return (
                          <Image
                            key={object.id}
                            x={object.x}
                            y={object.y}
                            image={object.image}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                          />
                        );
                      }
                    } else if (object.type === "text") {
                      return (
                        <Text
                          id="curtextShapeCanvas"
                          key={object.id}
                          x={object.x}
                          y={object.y}
                          text={object.text}
                          fontSize={object.fontSize}
                          fontStyle={object.fontStyle}
                          fontFamily={object.fontFamily}
                          textDecoration={object.textDecoration}
                          draggable={true}
                          onClick={(e) => {
                            props.setSelectedShape(e.target);
                            props.setCurrentShapeText(object.id);
                          }}
                        />
                      );
                    }

                    return null;
                  })}
                  {props.isActiveTransformer && (
                    <CustomTransformer selectedShape={props.selectedShape} />
                  )}
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
