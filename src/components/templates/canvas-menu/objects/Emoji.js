import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Emoji = () => {
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
          Эмодзи:{" "}
        </Typography>{" "}
      </Link>
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-teddy-bear-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-russia-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-nesting-dolls-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-grinning-face-with-big-eyes-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-face-blowing-a-kiss-96.png"
      />

      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-dog-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-dizzy-face-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-cold-face-96.png"
      />

      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-chicken-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-cat-with-tears-of-joy-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-cat-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-beating-heart-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-astonished-face-96.png"
      />

      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-anxious-face-with-sweat-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-angry-face-with-horns-96.png"
      />
      <img
        style={{ width: "70px", marginRight: "20px" }}
        src="./icons/emoji/icons8-angry-face-96.png"
      />
    </div>
  );
};

export default Emoji;
