import React from "react";
import Draggable from "react-draggable";
import CircleIcon from "@mui/icons-material/Circle";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import RectangleIcon from "@mui/icons-material/Rectangle";
import SquareIcon from "@mui/icons-material/Square";
import { Typography } from "@mui/material";
import { CaretUpFilled } from "@ant-design/icons";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import PentagonIcon from "@mui/icons-material/Pentagon";
import HexagonIcon from "@mui/icons-material/Hexagon";

const Figures = () => {
  return (
    <div className="figures-container">
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Фигуры:{" "}
      </Typography>
      <svg width="50" height="50">
        <CircleIcon sx={{ fontSize: "20px", color: "#dedada" }} />
      </svg>

      <svg width="50" height="50">
        <RectangleIcon sx={{ fontSize: "20px", color: "#dedada" }} />
      </svg>
      <svg width="50" height="50">
        <SquareIcon sx={{ fontSize: "20px", color: "#dedada" }} />
      </svg>
      <svg width="50" height="50">
        <StarOutlinedIcon sx={{ fontSize: "20px", color: "#dedada" }} />
      </svg>
      <svg width="50" height="50">
        <FavoriteOutlinedIcon sx={{ fontSize: "20px", color: "#dedada" }} />
      </svg>
      <svg width="50" height="50">
        <ChangeHistoryIcon sx={{ fontSize: "20px", color: "#dedada" }} />
      </svg>
      <svg width="50" height="50">
        <PentagonIcon sx={{ fontSize: "20px", color: "#dedada" }} />
      </svg>
      <svg width="50" height="50">
        <HexagonIcon sx={{ fontSize: "20px", color: "#dedada" }} />
      </svg>
    </div>
  );
};

export default Figures;
