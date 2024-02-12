import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const BackgroundColors = ({}) => {
  const data = [
    { id: 1, color: "#000" },
    { id: 2, color: "#fff" },
    { id: 321, color: "#ffebee" },
    { id: 322, color: "#ffcdd2" },
    { id: 324, color: "#ff5252" },
    { id: 323, color: "#ff1744" },
    { id: 3, color: "#d50000" }, //red
    { id: 325, color: "#e53935" },
    { id: 326, color: "#d32f2f" },
    { id: 327, color: "#b71c1c" },

    { id: 221, color: "#fce4ec" },
    { id: 222, color: "#f8bbd0" },
    { id: 223, color: "#ff4081" },
    { id: 224, color: "#ec407a" },
    { id: 4, color: "#e91e63" }, //pink
    { id: 225, color: "#f50057" },
    { id: 226, color: "#c2185b" },
    { id: 227, color: "#880e4f" },

    { id: 421, color: "#b388ff" },
    { id: 422, color: "#7c4dff" },
    { id: 423, color: "#651fff" },
    { id: 5, color: "#9c27b0" }, //purple
    { id: 425, color: "#6200ea" },
    { id: 426, color: "#4527a0" },
    { id: 427, color: "#311b92" },

    { id: 621, color: "#c5cae9" },
    { id: 622, color: "#9fa8da" },
    { id: 623, color: "#8c9eff" },
    { id: 624, color: "#536dfe" },
    { id: 7, color: "#3d5afe" }, //indigo
    { id: 625, color: "#304ffe" },
    { id: 626, color: "#283593" },
    { id: 627, color: "#1a237e" },

    { id: 723, color: "#64b5f6" },
    { id: 721, color: "#42a5f5" },
    { id: 722, color: "#2196f3" },
    { id: 8, color: "#2979ff" }, //blue
    { id: 725, color: "#2962ff" },
    { id: 726, color: "#1565c0" },
    { id: 727, color: "#0d47a1" },

    { id: 5423, color: "#b9f6ca" },
    { id: 4321, color: "#ccff90" },
    { id: 7622, color: "#b2ff59" },
    { id: 763, color: "#76ff03" }, //green
    { id: 775, color: "#64dd17" },
    { id: 776, color: "#00e676" },
    { id: 777, color: "#00c853" },

    { id: 1501, color: "#ffff8d" },
    { id: 12943, color: "#ffff8d" },
    { id: 139435, color: "#ffff00" },
    { id: 14775, color: "#ffeb3b" }, //yellow
    { id: 155454, color: "#ffd740" },
    { id: 1654, color: "#ffc400" },
    { id: 1754, color: "#ffab00" },

    { id: 12158, color: "#ff9e80" },
    { id: 159, color: "#ff6e40" },
    { id: 250, color: "#ff5722" }, //orange
    { id: 1586, color: "#ff6d00" },
    { id: 159, color: "#bf360c" },

    { id: 15558, color: "#d7ccc8" },
    { id: 1559, color: "#bcaaa4" },
    { id: 2550, color: "#8d6e63" }, //brown
    { id: 1558, color: "#5d4037" },

    { id: 1578, color: "#f5f5f5" },
    { id: 1579, color: "#eeeeee" },
    { id: 2570, color: "#bdbdbd" }, //grey
    { id: 1578, color: "#607d8b" },
    { id: 1579, color: "#616161" },
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
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundColors;
