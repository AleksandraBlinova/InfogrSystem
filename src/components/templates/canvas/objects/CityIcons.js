import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import axios from "axios";

const CityIcons = ({ handleChangeClickOnUnsplash }) => {
  let [data, setData] = React.useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/city_icons",
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

      {data.map((itm) => (
        <img
          key={itm.Id}
          style={{ width: "70px", marginRight: "20px" }}
          src={itm.City_icons_name}
          onClick={() => {
            handleChangeClickOnUnsplash(itm.City_icons_name);
          }}
        />
      ))}
    </div>
  );
};

export default CityIcons;
