import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Abstracs = ({ unsplashAbstracts }) => {
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
          Абстракции:{" "}
        </Typography>{" "}
      </Link>{" "}
      <div>
        {unsplashAbstracts.length > 0 &&
          unsplashAbstracts.map((itm) => {
            return (
              <img
                key={itm.id}
                src={itm.urls.small}
                style={{ width: "100px", height: "100px", marginRight: "15px" }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Abstracs;
