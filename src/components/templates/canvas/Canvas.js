import React, { useState, useEffect, useRef } from "react";

import "./Canvas.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import {
  Stage,
  Layer,
  Image,
  Transformer,
  Text,
  Rect,
  Circle,
  Star,
  Arrow,
  RegularPolygon,
  Line,
} from "react-konva";

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
          width: "420px",
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
            marginTop: "50px",
          }}
        >
          {!props.openedFirstTime && props.imagePaperActiveType == "" && (
            <Alert severity="error" id="alertError" onClose={handleCloseAlert}>
              Неподдерживаемый формат файла
            </Alert>
          )}
          {props.previewUrl && (
            <div className="image" id="imageCanvasForRect">
              <Stage
                id="myCanvas"
                width={420}
                height={580}
                ref={props.stageRef}
                crossorigin="Anonymous"
              >
                <Layer>
                  {props.allObjectsOnCURRENTStage.map((object) => {
                    if (object.type === "image") {
                      if (object.typeofImage == "figures_quadrat") {
                        return (
                          <Rect
                            fill={object.fill}
                            width={object.width}
                            height={object.height}
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            rotation={object.rotation}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
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
                      } else if (
                        object.typeofImage == "figures_quadrat_rounded"
                      ) {
                        return (
                          <Rect
                            fill={object.fill}
                            width={object.width}
                            height={object.height}
                            opacity={object.opacity}
                            rotation={object.rotation}
                            cornerRadius={10}
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
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
                            rotation={object.rotation}
                            radius={45}
                            opacity={object.opacity}
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
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
                            rotation={object.rotation}
                            numPoints={5}
                            innerRadius={18}
                            outerRadius={55}
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
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
                            rotation={object.rotation}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            points={[35, 130, 125, 130, 80, 40]}
                            closed
                            fill={object.fill}
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
                            key={object.id}
                            x={object.x}
                            y={object.y}
                          />
                        );
                      } else if (object.typeofImage == "figures_4angles") {
                        return (
                          <RegularPolygon
                            rotation={object.rotation}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            fill={object.fill}
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
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
                            rotation={object.rotation}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            fill={object.fill}
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
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
                            rotation={object.rotation}
                            draggable={true}
                            onClick={(e) => {
                              props.setSelectedShape(e.target);
                              props.setCurrentShapeText(object.id);
                            }}
                            fill={object.fill}
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
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
                            fillPriority={object.fillPriority}
                            fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                            fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                            fillLinearGradientColorStops={
                              object.fillLinearGradientColorStops
                                ? [
                                    0,
                                    object.fillLinearGradientColorStops[0],
                                    1,
                                    object.fillLinearGradientColorStops[1],
                                  ]
                                : ""
                            }
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
                      } else if (object.typeofImage == "lines_arrawsimple") {
                        return (
                          <Arrow
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
                            //dash={[15, 8]} // Шаблон пунктирной линии: 5 пикселей сплошной линии, 5 пикселей пустоты
                          />
                        );
                      } else if (object.typeofImage == "lines_arrawdashed") {
                        return (
                          <Arrow
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
                            width={object.width}
                            height={object.height}
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
                          rotation={object.rotation}
                          fill={object.fill}
                          fillPriority={object.fillPriority}
                          fillLinearGradientStartPoint={{ x: -30, y: 20 }}
                          fillLinearGradientEndPoint={{ x: 50, y: 20 }}
                          fillLinearGradientColorStops={
                            object.fillLinearGradientColorStops
                              ? [
                                  0,
                                  object.fillLinearGradientColorStops[0],
                                  1,
                                  object.fillLinearGradientColorStops[1],
                                ]
                              : ""
                          }
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
