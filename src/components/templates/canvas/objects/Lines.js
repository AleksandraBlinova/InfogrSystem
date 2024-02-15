import React from "react";
import { Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Lines = ({ handleChangeClickOnUnsplash }) => {
  return (
    <div className="lines-container">
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Линии:{" "}
      </Typography>{" "}
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./lines/1line.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./lines/1line.png");
        }}
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./lines/2line.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./lines/2line.png");
        }}
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./lines/3line.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./lines/3line.png");
        }}
      />
      <img
        style={{ width: "90px", marginRight: "20px" }}
        src="./lines/7line.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./lines/7line.png");
        }}
      />
      <img
        style={{ width: "85px", marginRight: "20px" }}
        src="./lines/8line.png"
        onClick={() => {
          handleChangeClickOnUnsplash("./lines/8line.png");
        }}
      />
    </div>
  );
};

export default Lines;
