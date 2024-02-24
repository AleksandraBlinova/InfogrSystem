import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const PhotoGradients = ({
  unsplashPhotoGradients,
  handleChangeClickOnUnsplash,
}) => {
  return (
    <div className="photos-unsplash-container">
      <Link to="https://unsplash.com/">
        {" "}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#000",
          }}
        >
          Градиенты:{" "}
        </Typography>{" "}
      </Link>{" "}
      <div>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((num) => (
          <img
            style={{ height: "120px", width: "100px", marginRight: "20px" }}
            src={"./unsplash-gradient/gradient" + num.toString() + ".jpg"}
            onClick={() => {
              handleChangeClickOnUnsplash(
                "./unsplash-gradient/gradient" + num.toString() + ".jpg"
              );
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGradients;
