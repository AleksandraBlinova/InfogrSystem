import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CityIcons = () => {
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
          Иконки города:{" "}
        </Typography>{" "}
      </Link>

      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-bank-94.png"
      />

      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-basilica-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-billboard-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-bumper-car-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-car-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-carousel-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-cathedral-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-church-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-claw-machine-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-confetti-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-cosh-weapon-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-electric-bike-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-ferris-wheel-94.png"
      />

      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-fountain-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-heart-ballon-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-parliament-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-party-balloons-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-playground-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-restaurant-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-telescope-94.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/city/icons8-temple-94.png"
      />
    </div>
  );
};

export default CityIcons;
