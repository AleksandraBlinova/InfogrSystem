import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import axios from "axios";

const BackgroundColors = ({ changeBackgroundLinesFigures }) => {
  // const data = [
  //   { id: 1, color: "#000" },
  //   { id: 2, color: "#fff" },
  //   { id: 4, color: "#ffcdd2" },
  //   { id: 5, color: "#ff5252" },
  //   { id: 6, color: "#ff1744" },
  //   { id: 7, color: "#d50000" }, //red
  //   { id: 8, color: "#e53935" },
  //   { id: 9, color: "#d32f2f" },
  //   { id: 10, color: "#b71c1c" },
  //   { id: 12, color: "#f8bbd0" },
  //   { id: 13, color: "#ff4081" },
  //   { id: 14, color: "#ec407a" },
  //   { id: 15, color: "#e91e63" }, //pink
  //   { id: 16, color: "#f50057" },
  //   { id: 17, color: "#c2185b" },
  //   { id: 18, color: "#880e4f" },
  //   { id: 19, color: "#b388ff" },
  //   { id: 20, color: "#7c4dff" },
  //   { id: 21, color: "#651fff" },
  //   { id: 22, color: "#9c27b0" }, //purple
  //   { id: 23, color: "#6200ea" },
  //   { id: 24, color: "#4527a0" },
  //   { id: 25, color: "#311b92" },
  //   { id: 26, color: "#c5cae9" },
  //   { id: 27, color: "#9fa8da" },
  //   { id: 28, color: "#8c9eff" },
  //   { id: 29, color: "#536dfe" },
  //   { id: 30, color: "#3d5afe" }, //indigo
  //   { id: 31, color: "#304ffe" },
  //   { id: 32, color: "#283593" },
  //   { id: 33, color: "#1a237e" },
  //   { id: 34, color: "#64b5f6" },
  //   { id: 35, color: "#42a5f5" },
  //   { id: 36, color: "#2196f3" },
  //   { id: 37, color: "#2979ff" }, //blue
  //   { id: 38, color: "#2962ff" },
  //   { id: 39, color: "#1565c0" },
  //   { id: 40, color: "#0d47a1" },
  //   { id: 41, color: "#b9f6ca" },
  //   { id: 42, color: "#ccff90" },
  //   { id: 43, color: "#b2ff59" },
  //   { id: 44, color: "#76ff03" }, //green
  //   { id: 46, color: "#00e676" },
  //   { id: 47, color: "#00c853" },
  //   { id: 48, color: "#ffff8d" },
  //   { id: 49, color: "#ffff00" },
  //   { id: 50, color: "#ffeb3b" }, //yellow
  //   { id: 51, color: "#ffd740" },
  //   { id: 52, color: "#ffc400" },
  //   { id: 53, color: "#ffab00" },
  //   { id: 54, color: "#ff9e80" },
  //   { id: 55, color: "#ff6e40" },
  //   { id: 56, color: "#ff5722" }, //orange
  //   { id: 57, color: "#ff6d00" },
  //   { id: 58, color: "#bcaaa4" },
  //   { id: 59, color: "#8d6e63" }, //brown
  //   { id: 60, color: "#5d4037" },
  //   { id: 61, color: "#bdbdbd" }, //grey
  //   { id: 62, color: "#607d8b" },
  //   { id: 63, color: "#616161" },
  // ];

  // const dataGr = [
  //   { id: 1, color: "linear-gradient(90deg, #fff129,#12b0ff)" },
  //   { id: 2, color: "linear-gradient(90deg, #011b58,#941e60)" },
  //   {
  //     id: 4,
  //     color: "linear-gradient(90deg, #2f2eb9,#d3ddcc)",
  //   },
  //   { id: 5, color: "linear-gradient(90deg, #7529f9,#1bcfdc)" },
  //   { id: 6, color: "linear-gradient(90deg, #011d57,#fff76b)" },
  //   { id: 7, color: "linear-gradient(90deg, #004a81,#ef7f7e)" },
  //   { id: 8, color: "linear-gradient(90deg, #988eb5,#1016e2)" },
  //   {
  //     id: 9,
  //     color: "linear-gradient(90deg, #6780c7,#8a33c9)",
  //   },
  //   {
  //     id: 10,
  //     color: "linear-gradient(90deg, #3d0084,#c728a4)",
  //   },
  //   {
  //     id: 12,
  //     color: "linear-gradient(90deg,  #c773fd,#ec238d)",
  //   },
  //   { id: 13, color: "linear-gradient(90deg, #c773fd,#3d0084)" },
  //   { id: 14, color: "linear-gradient(90deg, #c728a4,#a61326)" },
  //   { id: 15, color: "linear-gradient(90deg, #f0d28b,#f55c6a)" },
  //   { id: 16, color: "linear-gradient(90deg, #8a8e85,#484747)" },
  //   { id: 17, color: "linear-gradient(90deg, #d25177,#c18588)" },
  //   { id: 18, color: "linear-gradient(90deg, #dd69ad,#e9ca2f)" },
  //   { id: 19, color: "linear-gradient(90deg, #900e0e,#b1850b)" },
  //   { id: 20, color: "linear-gradient(90deg, #bf5f7c,#535bd5)" },
  //   { id: 21, color: "linear-gradient(90deg, #98ce30,#c5d323)" },
  //   { id: 22, color: "linear-gradient(90deg, #3b89c4,#197630)" },
  //   { id: 23, color: "linear-gradient(90deg, #2114e1,#df0ccd)" },
  //   { id: 24, color: "linear-gradient(90deg, #1dcffb,#00e4c9)" },
  //   { id: 25, color: "linear-gradient(90deg, #5f66ec,#bd83d6)" },
  //   { id: 26, color: "linear-gradient(90deg, #5886a8,#ffffff)" },
  //   { id: 27, color: "linear-gradient(90deg, #f490c2,#7ae2ff)" },
  //   { id: 28, color: "linear-gradient(90deg, #ffffff,#8d90e3)" },
  //   { id: 29, color: "linear-gradient(90deg, #01152c,#134057)" },
  //   {
  //     id: 30,
  //     color: "linear-gradient(90deg, #2a795b,#294055)",
  //   },
  //   { id: 31, color: "linear-gradient(90deg, #00b7ff,#83d5ba)" },
  //   { id: 32, color: "linear-gradient(90deg, #8c0f43,#7e5fd2)" },
  //   {
  //     id: 33,
  //     color: "linear-gradient(90deg, #1ab5f0,#1b2225)",
  //   },
  //   { id: 34, color: "linear-gradient(90deg, #fe216f,#f881b0)" },
  //   {
  //     id: 35,
  //     color: "linear-gradient(90deg, #2a7977,#213270)",
  //   },
  //   { id: 36, color: "linear-gradient(90deg, 	#1fd1f9,  #b621fe)" },
  //   { id: 37, color: "linear-gradient(90deg, 	#f6d327,  #de4daa)" },
  //   { id: 38, color: "linear-gradient(315deg, #63a4ff,  #83eaf1)" },
  //   { id: 39, color: "linear-gradient(90deg, #f8ef42,  #0fd64f)" },
  //   { id: 40, color: "linear-gradient(315deg, 	#f7b42c,  #fc575e)" },
  //   { id: 41, color: "linear-gradient(135deg, #7ee8fa,  #eec0c6)" },
  //   { id: 42, color: "linear-gradient(90deg, #42378f,  #f53844)" },
  //   { id: 43, color: "linear-gradient(315deg, 	#fcd000,  #76daff)" },
  //   { id: 44, color: "linear-gradient(90deg, #647dee,  #7f53ac)" },
  //   { id: 45, color: "linear-gradient(140deg, #f175ff,  #ffc038)" },
  //   { id: 46, color: "linear-gradient(315deg, #d99ec9,  #f6f0c4)" },
  //   { id: 47, color: "linear-gradient(45deg, #6BCB77, #C0EDA6)" },
  //   { id: 48, color: "linear-gradient(90deg, #CE49BF, #F190B7)" },
  //   { id: 49, color: "linear-gradient(90deg, #FFFA4D, #FF8AAE)" },
  //   { id: 50, color: "linear-gradient(45deg, #243D25, #C0EDA6)" },
  //   { id: 51, color: "linear-gradient(135deg, #B33030, #FFB72B)" },
  //   { id: 52, color: "linear-gradient(135deg, #FF9F45, #FFBC80)" },
  //   { id: 53, color: "linear-gradient(90deg, #D67D3E, #FFAD60)" },
  //   { id: 54, color: "linear-gradient(90deg, #FF7800, #F3950D)" },
  //   { id: 55, color: "linear-gradient(315deg, #FFE162, #FF8C32)" },
  //   { id: 56, color: "linear-gradient(90deg, #414d0b, #727a17)" },
  // ];

  let [data, setDataColors] = React.useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/colors",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setDataColors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let [dataGr, setDataColorsGR] = React.useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/gradients_colors",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setDataColorsGR(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="photos-unsplash-container">
        {" "}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#000",
          }}
        >
          Цвета:{" "}
        </Typography>{" "}
        <div style={{ display: "flex" }}>
          {data.map((item) => (
            <div key={item.Id} style={{ display: "flex" }}>
              <div
                key={item.Id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: item.Color,
                  width: "50px",
                  height: "50px",
                  border: "1px solid grey",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                onClick={() => changeBackgroundLinesFigures(item)}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="photos-unsplash-container">
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
        <div style={{ display: "flex" }}>
          {dataGr.map((item) => (
            <div key={item.Id} style={{ display: "flex" }}>
              <div
                key={item.Id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: item.Color,
                  width: "50px",
                  height: "50px",
                  border: "1px solid grey",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
                onClick={() => changeBackgroundLinesFigures(item)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BackgroundColors;
