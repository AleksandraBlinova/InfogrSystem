import React from "react";
import FooterCreatives from "../../footer-creatives/FooterCreatives";
import AppBarCreatives from "../../app-bar-creatives/AppbarCreatives";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";

const NewProject = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(2);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  localStorage.setItem("chosMarketPL", "");
  localStorage.setItem("needTemplateMarketPL", "");

  return (
    <div>
      <AppBarCreatives
        handleListItemClick={handleListItemClick}
        selectedIndex={selectedIndex}
      />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",

          padding: "50px",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                key={1}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: "200px",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "25px",
                    "&:hover": {
                      "text-decoration": "underline",
                    },
                  }}
                >
                  Инфографика OZON
                </TableCell>
                <TableCell align="center">
                  {/* <CardActionArea href="/withouttempOzon"> */}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "Ozon");
                      localStorage.setItem("needTemplateMarketPL", "no");
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="70px"
                      height="250px"
                      image="6391435521.jpg"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                    />
                    Создать без шаблона для OZON
                  </CardActionArea>
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "Ozon");
                      localStorage.setItem(
                        "needTemplateMarketPL",
                        "basketball"
                      );
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="100px"
                      height="250px"
                      image="БаскетМяч.png"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                    />
                    Создать шаблон для OZON
                  </CardActionArea>
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "Ozon");
                      localStorage.setItem("needTemplateMarketPL", "pillow");
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="100px"
                      height="250px"
                      image="PillowTemp.png"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                    />
                    Создать шаблон для OZON
                  </CardActionArea>
                </TableCell>
              </TableRow>

              <TableRow
                key={2}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: "200px",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "25px",
                    "&:hover": {
                      "text-decoration": "underline",
                    },
                  }}
                >
                  Инфографика Wildberries
                </TableCell>
                <TableCell align="center">
                  {" "}
                  {/* <CardActionArea href="/withouttempWB"> */}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "Wildberries");
                      localStorage.setItem("needTemplateMarketPL", "no");
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="70px"
                      height="250px"
                      image="6391435521.jpg"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                    />
                    Создать без шаблона для Wildberries
                  </CardActionArea>
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "Wildberries");
                      localStorage.setItem("needTemplateMarketPL", "fur");
                    }}
                  >
                    <CardMedia
                      image="Image-fur.png"
                      component="img"
                      width="100px"
                      height="250px"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                    />
                    Создать шаблон для Wildberries
                  </CardActionArea>
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "Wildberries");
                      localStorage.setItem("needTemplateMarketPL", "hoodie");
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="100px"
                      height="250px"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                      image="hoodie.png"
                    />
                    Создать шаблон для Wildberries
                  </CardActionArea>
                </TableCell>
              </TableRow>
              <TableRow
                key={3}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: "200px",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "25px",
                    "&:hover": {
                      "text-decoration": "underline",
                    },
                  }}
                >
                  Инфографика Yandex Market
                </TableCell>
                <TableCell align="center">
                  {" "}
                  {/* <CardActionArea href="/withouttempYM"> */}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "YandexMarket");
                      localStorage.setItem("needTemplateMarketPL", "no");
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="70px"
                      height="250px"
                      image="6391435521.jpg"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                    />
                    Создать без шаблона для Yandex Market
                  </CardActionArea>
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "YandexMarket");
                      localStorage.setItem(
                        "needTemplateMarketPL",
                        "toiletChild"
                      );
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="100px"
                      height="250px"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                      image="ToiletReady.png"
                    />
                    Создать шаблон для Yandex Market
                  </CardActionArea>
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardActionArea
                    href="/chooseUserAttributes"
                    onClick={() => {
                      localStorage.setItem("chosMarketPL", "YandexMarket");
                      localStorage.setItem("needTemplateMarketPL", "boots");
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="100px"
                      height="250px"
                      sx={{ objectFit: "contain", marginBottom: "10px" }}
                      image="boots.png"
                    />
                    Создать шаблон для Yandex Market
                  </CardActionArea>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <FooterCreatives />
    </div>
  );
};

export default NewProject;
