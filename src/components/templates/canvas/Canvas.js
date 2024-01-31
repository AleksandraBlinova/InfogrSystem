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

const Rectangle = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  clickOnUnsplash,
}) => {
  const [image] = useImage(clickOnUnsplash);
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useLayoutEffect(() => {
    shapeRef.current.cache();
  }, [image]);

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Image
        image={image}
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        width={420}
        height={560}
        onTransformEnd={(e) => {
          const node = shapeRef.current;

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            scaleX: node.scaleX(),
            scaleY: node.scaleY(),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          rotateEnabled={false}
          padding={5}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

const initialRectangles = [
  {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    scaleX: 1,
    scaleY: 1,
    id: "rect1",
  },
];

const Canvas = (props) => {
  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  useEffect(() => {
    document.addEventListener("keydown", handleClickKeyDown);
    return () => {
      document.removeEventListener("keydown", handleClickKeyDown);
    };
  });

  useEffect(() => {
    const alertErrorEl = document.getElementById("alertError");

    if (props.unsplashImagesOnline && props.clickOnUnsplash && alertErrorEl)
      alertErrorEl.style.display = "none";
  });

  const handleClickKeyDown = (e) => {
    if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
      props.handleChangeClickOnUnsplash("");
    }
  };

  const handleClick = (event) => {
    //прослушка на выбранность рамки вокруг объекта
    if (event.toElement.toString() != "[object HTMLCanvasElement]")
      selectShape(null);
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
            height: "560px",
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
              <Stage
                width={420}
                height={560}
                onMouseDown={(e) => {
                  // deselect when clicked on empty area
                  const clickedOnEmpty = e.target === e.target.getStage();
                  if (clickedOnEmpty) {
                    selectShape(null);
                  }
                }}
              >
                <Layer>
                  {rectangles.map((rect, i) => {
                    return (
                      <Rectangle
                        key={i}
                        shapeProps={rect}
                        isSelected={rect.id === selectedId}
                        onSelect={() => {
                          selectShape(rect.id);
                        }}
                        clickOnUnsplash={props.previewUrl}
                        onChange={(newAttrs) => {
                          const rects = rectangles.slice();
                          rects[i] = newAttrs;
                          setRectangles(rects);
                        }}
                      />
                    );
                  })}
                </Layer>
              </Stage>
            </div>
          )}

          {props.unsplashImagesOnline && props.clickOnUnsplash && (
            <div className="image" id="imageCanvasForRect">
              <Stage
                width={420}
                height={560}
                onMouseDown={(e) => {
                  // deselect when clicked on empty area
                  const clickedOnEmpty = e.target === e.target.getStage();
                  if (clickedOnEmpty) {
                    selectShape(null);
                  }
                }}
              >
                <Layer>
                  {rectangles.map((rect, i) => {
                    return (
                      <Rectangle
                        key={i}
                        shapeProps={rect}
                        isSelected={rect.id === selectedId}
                        onSelect={() => {
                          selectShape(rect.id);
                        }}
                        clickOnUnsplash={props.clickOnUnsplash}
                        onChange={(newAttrs) => {
                          const rects = rectangles.slice();
                          rects[i] = newAttrs;
                          setRectangles(rects);
                        }}
                      />
                    );
                  })}
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
