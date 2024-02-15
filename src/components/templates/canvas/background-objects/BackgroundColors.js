import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const BackgroundColors = ({ changeBackgroundLinesFigures }) => {
  const data = [
    { id: 1, color: "#000" },
    { id: 2, color: "#fff" },
    { id: 4, color: "#ffcdd2" },
    { id: 5, color: "#ff5252" },
    { id: 6, color: "#ff1744" },
    { id: 7, color: "#d50000" }, //red
    { id: 8, color: "#e53935" },
    { id: 9, color: "#d32f2f" },
    { id: 10, color: "#b71c1c" },
    { id: 12, color: "#f8bbd0" },
    { id: 13, color: "#ff4081" },
    { id: 14, color: "#ec407a" },
    { id: 15, color: "#e91e63" }, //pink
    { id: 16, color: "#f50057" },
    { id: 17, color: "#c2185b" },
    { id: 18, color: "#880e4f" },
    { id: 19, color: "#b388ff" },
    { id: 20, color: "#7c4dff" },
    { id: 21, color: "#651fff" },
    { id: 22, color: "#9c27b0" }, //purple
    { id: 23, color: "#6200ea" },
    { id: 24, color: "#4527a0" },
    { id: 25, color: "#311b92" },
    { id: 26, color: "#c5cae9" },
    { id: 27, color: "#9fa8da" },
    { id: 28, color: "#8c9eff" },
    { id: 29, color: "#536dfe" },
    { id: 30, color: "#3d5afe" }, //indigo
    { id: 31, color: "#304ffe" },
    { id: 32, color: "#283593" },
    { id: 33, color: "#1a237e" },
    { id: 34, color: "#64b5f6" },
    { id: 35, color: "#42a5f5" },
    { id: 36, color: "#2196f3" },
    { id: 37, color: "#2979ff" }, //blue
    { id: 38, color: "#2962ff" },
    { id: 39, color: "#1565c0" },
    { id: 40, color: "#0d47a1" },
    { id: 41, color: "#b9f6ca" },
    { id: 42, color: "#ccff90" },
    { id: 43, color: "#b2ff59" },
    { id: 44, color: "#76ff03" }, //green
    { id: 46, color: "#00e676" },
    { id: 47, color: "#00c853" },
    { id: 48, color: "#ffff8d" },
    { id: 49, color: "#ffff00" },
    { id: 50, color: "#ffeb3b" }, //yellow
    { id: 51, color: "#ffd740" },
    { id: 52, color: "#ffc400" },
    { id: 53, color: "#ffab00" },
    { id: 54, color: "#ff9e80" },
    { id: 55, color: "#ff6e40" },
    { id: 56, color: "#ff5722" }, //orange
    { id: 57, color: "#ff6d00" },
    { id: 58, color: "#bcaaa4" },
    { id: 59, color: "#8d6e63" }, //brown
    { id: 60, color: "#5d4037" },
    { id: 61, color: "#bdbdbd" }, //grey
    { id: 62, color: "#607d8b" },
    { id: 63, color: "#616161" },
  ];
  return (
    <div className="photos-unsplash-container">
      {" "}
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#000",
        }}
      >
        Цвета:{" "}
      </Typography>{" "}
      <div style={{ display: "flex" }}>
        {data.map((item) => (
          <div key={item.id} style={{ display: "flex" }}>
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: item.color,
                width: "50px",
                height: "50px",
                border: "1px solid grey",
                marginRight: "10px",
                marginBottom: "10px",
              }}
              onClick={() => changeBackgroundLinesFigures(item)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundColors;
