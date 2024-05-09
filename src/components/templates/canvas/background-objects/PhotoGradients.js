import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import axios from "axios";

const PhotoGradients = ({
  unsplashPhotoGradients,
  handleChangeClickOnUnsplash,
}) => {
  let [data, setData] = React.useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/gradients_backgr",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
        {data.map((itm) => (
          <img
            key={itm.Id}
            style={{ height: "120px", width: "100px", marginRight: "20px" }}
            src={itm.Gradient_backgr_name}
            onClick={() => {
              handleChangeClickOnUnsplash(itm.Gradient_backgr_name);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGradients;
