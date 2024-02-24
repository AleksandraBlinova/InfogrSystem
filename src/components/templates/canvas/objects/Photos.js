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
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
        ].map((num) => (
          <img
            style={{ height: "120px", width: "100px", marginRight: "20px" }}
            src={
              "./unsplash-rand-photos/photounsplashRandom" +
              num.toString() +
              ".jpg"
            }
            onClick={() => {
              handleChangeClickOnUnsplash(
                "./unsplash-rand-photos/photounsplashRandom" +
                  num.toString() +
                  ".jpg"
              );
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
