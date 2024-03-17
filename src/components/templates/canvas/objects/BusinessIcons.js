import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import axios from "axios";

const BusinessIcons = ({ handleChangeClickOnUnsplash }) => {
  let [data, setData] = React.useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/business_icons",
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
          Бизнес иконки:{" "}
        </Typography>{" "}
      </Link>
      {data.map((itm) => (
        <img
          key={itm.Id}
          style={{ width: "70px", marginRight: "20px" }}
          src={itm.Business_icons_name}
          onClick={() => {
            handleChangeClickOnUnsplash(itm.Business_icons_name);
          }}
        />
      ))}
    </div>
  );
};

export default BusinessIcons;
