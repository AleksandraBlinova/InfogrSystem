import React from "react";
import { Typography } from "@mui/material";
import UnsplashReact, {
  Base64Uploader,
  withDefaultProps,
} from "unsplash-react";
import { Link } from "react-router-dom";

const MY_ACCESS_KEY = "RKnG9ADSOyqmCXxJ_9nf3au8Ie-E5kzFcdIkVFIcLNc";

const Photos = ({ unsplashImagesOnline, handleChangeClickOnUnsplash }) => {
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
          Фотографии:{" "}
        </Typography>{" "}
      </Link>

      <div>
        {unsplashImagesOnline.length > 0 &&
          unsplashImagesOnline.map((itm) => {
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

export default Photos;
