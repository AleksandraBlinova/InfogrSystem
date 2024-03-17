import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import axios from "axios";

const Lines = ({ handleChangeClickOnUnsplash }) => {
  let [data, setData] = React.useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/lines",
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
    <div className="lines-container">
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Линии:{" "}
      </Typography>{" "}
      {data.map((itm) => (
        <img
          key={itm.Id}
          style={{ width: "80px", marginRight: "20px" }}
          src={itm.Line_name}
          onClick={() => {
            handleChangeClickOnUnsplash(itm.Line_name);
          }}
        />
      ))}
    </div>
  );
};

export default Lines;
