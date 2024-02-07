import React, { useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Stage, Layer, Text, Image } from "react-konva";

const TextArea = ({ addText, textInputRef, changeTextStyle }) => {
  const [selectedImageFont, setselectedImageFont] = useState(0);

  const [selectedImageStyle, setselectedImageStyle] = useState(0);

  const handleChangeImaageStyleSelected = (value) => {
    setselectedImageStyle(value);
  };

  const handleChangeImaageFontSelected = (value) => {
    setselectedImageFont(value);
  };

  return (
    <div>
      {" "}
      <Stack spacing={2} sx={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Введите текст"
          ref={textInputRef}
          style={{ height: "30px", fontSize: "16px" }}
        />
        <Button
          variant="outlined"
          sx={{
            color: "#000",
            borderRadius: "0px",
            borderColor: "rgb(118, 118, 118)",
            "&:hover": {
              backgroundColor: "#f0f1f3",
              borderColor: "#000",
              borderRadius: "0px",
            },
          }}
          onClick={addText}
        >
          Добавить
        </Button>
      </Stack>
      <div className="text-area-container">
        <Typography
          sx={{ fontSize: "16px", fontWeight: "500", marginBottom: "10px" }}
        >
          Стили текста:{" "}
        </Typography>
        <img
          id="imaageFontSelected"
          style={{
            width: "100px",
            marginRight: "15px",
            border:
              selectedImageStyle == 0 ? "3px solid purple" : "1px solid grey",
          }}
          src="./textStyles/обычный.png"
          onClick={() => {
            changeTextStyle("обычный");
            handleChangeImaageStyleSelected(0);
          }}
        />
        <img
          id="imaageFontSelected"
          style={{
            width: "100px",
            marginRight: "15px",
            border:
              selectedImageStyle == 1 ? "3px solid purple" : "1px solid grey",
          }}
          src="./textStyles/жирный.png"
          onClick={() => {
            changeTextStyle("жирный");
            handleChangeImaageStyleSelected(1);
          }}
        />
        <img
          id="imaageFontSelected"
          style={{
            width: "100px",
            marginRight: "15px",
            border:
              selectedImageStyle == 2 ? "3px solid purple" : "1px solid grey",
          }}
          src="./textStyles/наклонный.png"
          onClick={() => {
            changeTextStyle("наклонный");
            handleChangeImaageStyleSelected(2);
          }}
        />
        <img
          id="imaageFontSelected"
          style={{
            width: "100px",
            marginRight: "15px",
            border:
              selectedImageStyle == 3 ? "3px solid purple" : "1px solid grey",
          }}
          src="./textStyles/подчеркнутый.png"
          onClick={() => {
            changeTextStyle("подчеркнутый");
            handleChangeImaageStyleSelected(3);
          }}
        />
      </div>
      <div className="text-area-container">
        <Typography
          sx={{ fontSize: "16px", fontWeight: "500", marginBottom: "10px" }}
        >
          Шрифты текста:{" "}
        </Typography>
        <img
          id="imaageFontSelected"
          style={{
            width: "100px",
            marginRight: "15px",
            border:
              selectedImageFont == 0 ? "3px solid purple" : "1px solid grey",
          }}
          src="./textFonts/arial.png"
          onClick={() => {
            changeTextStyle("arial");
            handleChangeImaageFontSelected(0);
          }}
        />
        <img
          id="imaageFontSelected"
          style={{
            width: "100px",
            marginRight: "15px",
            border:
              selectedImageFont == 1 ? "3px solid purple" : "1px solid grey",
          }}
          src="./textFonts/calibri.png"
          onClick={() => {
            changeTextStyle("calibri");
            handleChangeImaageFontSelected(1);
          }}
        />
        <img
          id="imaageFontSelected"
          style={{
            width: "100px",
            marginRight: "15px",
            border:
              selectedImageFont == 2 ? "3px solid purple" : "1px solid grey",
          }}
          src="./textFonts/segoeUI.png"
          onClick={() => {
            {
              changeTextStyle("segoeUI");
              handleChangeImaageFontSelected(2);
            }
          }}
        />
        <img
          id="imaageFontSelected"
          style={{
            width: "100px",
            marginRight: "15px",
            border:
              selectedImageFont == 3 ? "3px solid purple" : "1px solid grey",
          }}
          src="./textFonts/timesNewRoman.png"
          onClick={() => {
            changeTextStyle("timesNewRoman");
            handleChangeImaageFontSelected(3);
          }}
        />
      </div>
    </div>
  );
};

export default TextArea;
