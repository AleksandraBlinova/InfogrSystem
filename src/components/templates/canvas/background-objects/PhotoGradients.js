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
        {unsplashPhotoGradients.length > 0 &&
          unsplashPhotoGradients.map((itm) => {
            return (
              <img
                key={itm.id}
                src={itm.urls.small}
                style={{ width: "100px", height: "100px", marginRight: "15px" }}
                onClick={() => handleChangeClickOnUnsplash(itm.urls.small)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PhotoGradients;
