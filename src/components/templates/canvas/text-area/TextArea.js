import React, { useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Stage, Layer, Text, Image } from "react-konva";

const TextArea = ({ addText, textInputRef }) => {
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
          style={{
            width: "100px",
            marginRight: "15px",
            border: "1px solid grey",
          }}
          src="./textStyles/обычный.png"
        />
        <img
          style={{
            width: "100px",
            marginRight: "15px",
            border: "1px solid grey",
          }}
          src="./textStyles/жирный.png"
        />
        <img
          style={{
            width: "100px",
            marginRight: "15px",
            border: "1px solid grey",
          }}
          src="./textStyles/наклонный.png"
        />
        <img
          style={{
            width: "100px",
            marginRight: "15px",
            border: "1px solid grey",
          }}
          src="./textStyles/подчеркнутый.png"
        />
        <img
          style={{
            width: "100px",
            marginRight: "15px",
            border: "1px solid grey",
          }}
          src="./textStyles/жирИнакл.png"
        />
        <img
          style={{
            width: "100px",
            marginRight: "15px",
            border: "1px solid grey",
          }}
          src="./textStyles/жирИнаклИподч.png"
        />
        <img
          style={{
            width: "100px",
            marginRight: "15px",
            border: "1px solid grey",
          }}
          src="./textStyles/жирИподч.png"
        />
        <img
          style={{
            width: "100px",
            marginRight: "15px",
            border: "1px solid grey",
          }}
          src="./textStyles/наклИподч.png"
        />
      </div>
    </div>
  );
};

export default TextArea;
