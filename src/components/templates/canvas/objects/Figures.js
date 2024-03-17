import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import axios from "axios";

const Figures = ({ handleChangeClickOnUnsplash }) => {
  let [data, setData] = React.useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/figures",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        console.log("res", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="figures-container">
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Фигуры:{" "}
      </Typography>
      {data.map((itm) => (
        <img
          key={itm.Id}
          style={{ width: "50px", marginRight: "10px" }}
          src={itm.Figure_name}
          onClick={() => {
            handleChangeClickOnUnsplash(itm.Figure_name);
          }}
        />
      ))}
    </div>
  );
};

export default Figures;
