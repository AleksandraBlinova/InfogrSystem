import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BusinessIcons = () => {
  return (
    <div className="graphics-s8-container">
      <Link to="https://icons8.com/">
        {" "}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#000",
          }}
        >
          Бизнес иконки:{" "}
        </Typography>{" "}
      </Link>

      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/business/icons8-commercial-100.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/business/icons8-disclaimer-100.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/business/icons8-barbershop-100.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/business/icons8-goal-100.png"
      />
      <img
        style={{ width: "60px", marginRight: "20px" }}
        src="./icons/business/icons8-hand-with-pen-100.png"
      />
      <img
        style={{ width: "80px", marginRight: "20px" }}
        src="./icons/business/icons8-service-100.png"
      />
      <img
        style={{ width: "80px", marginRight: "20px" }}
        src="./icons/business/icons8-trust-100.png"
      />
    </div>
  );
};

export default BusinessIcons;
