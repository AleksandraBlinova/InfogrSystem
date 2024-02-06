import React, { useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
    </div>
  );
};

export default TextArea;
