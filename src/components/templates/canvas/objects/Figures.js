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

const Figures = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div className="figures-container">
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Фигуры:{" "}
      </Typography>
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/квадрат.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./figures/квадрат.png");
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/круг.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./figures/круг.png");
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/треугольник.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./figures/треугольник.png");
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/звезда.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./figures/звезда.png");
        }}
      />

      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/трапеция.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./figures/трапеция.png");
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/шестиугольник.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./figures/шестиугольник.png");
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/восьмиугольник.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./figures/восьмиугольник.png");
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/пентагон.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./figures/пентагон.png");
        }}
      />
    </div>
  );
};

export default Figures;
