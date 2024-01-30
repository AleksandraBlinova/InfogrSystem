import React from "react";
import { Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Lines = () => {
  return (
    <div className="lines-container">
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Линии:{" "}
      </Typography>{" "}
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./lines/1line.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./lines/2line.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./lines/3line.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./lines/4line.png"
      />
      <img
        style={{ width: "60px", marginRight: "20px" }}
        src="./lines/5line.png"
      />
      <img
        style={{ width: "80px", marginRight: "20px" }}
        src="./lines/6line.png"
      />
    </div>
  );
};

export default Lines;
