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
        src="./figures/video_4484656_7523051_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4484656_7523051_screenshot_pixian_ai.png"
          );
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/video_4484658_7523063_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4484658_7523063_screenshot_pixian_ai.png"
          );
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/video_4484660_7523069_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4484660_7523069_screenshot_pixian_ai.png"
          );
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/video_4484664_7523078_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4484664_7523078_screenshot_pixian_ai.png"
          );
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/video_4484668_7523081_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4484668_7523081_screenshot_pixian_ai.png"
          );
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/video_4484672_7523087_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4484672_7523087_screenshot_pixian_ai.png"
          );
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/video_4484675_7523091_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4484675_7523091_screenshot_pixian_ai.png"
          );
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/video_4484678_7523093_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4484678_7523093_screenshot_pixian_ai.png"
          );
        }}
      />
      <img
        style={{ width: "50px", marginRight: "10px" }}
        src="./figures/video_4650429_7818899_screenshot_pixian_ai.png"
        onClick={() => {
          handleChangeClickOnUnsplash(
            "./figures/video_4650429_7818899_screenshot_pixian_ai.png"
          );
        }}
      />
    </div>
  );
};

export default Figures;
