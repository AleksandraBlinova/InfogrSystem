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
                  <CardActionArea href="/withouttempOzon">
                    <CardMedia
                      component="img"
                      width="100px"
                      height="200px"
                      image="6391435521.jpg"
                    />
                    Создать без шаблона для OZON
                  </CardActionArea>
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <CardMedia
                    component="img"
                    width="150px"
                    height="200px"
                    image="1-1001.jpg"
                  />
                  Создать шаблон для OZON
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardMedia
                    component="img"
                    width="150px"
                    height="200px"
                    image="1-1001.jpg"
                  />
                  Создать шаблон для OZON
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
                  <CardActionArea href="/withouttempWB">
                    <CardMedia
                      component="img"
                      width="150px"
                      height="200px"
                      image="6391435521.jpg"
                    />
                    Создать без шаблона для Wildberries
                  </CardActionArea>
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardMedia
                    component="img"
                    width="150px"
                    height="200px"
                    image="1-1001.jpg"
                  />
                  Создать шаблон для Wildberries
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardMedia
                    component="img"
                    width="150px"
                    height="200px"
                    image="1-1001.jpg"
                  />
                  Создать шаблон для Wildberries
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
                  <CardActionArea href="/withouttempYM">
                    <CardMedia
                      component="img"
                      width="150px"
                      height="200px"
                      image="6391435521.jpg"
                    />
                    Создать без шаблона для Yandex Market
                  </CardActionArea>
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardMedia
                    component="img"
                    width="150px"
                    height="200px"
                    image="1-1001.jpg"
                  />
                  Создать шаблон для Yandex Market
                </TableCell>{" "}
                <TableCell align="center">
                  {" "}
                  <CardMedia
                    component="img"
                    width="150px"
                    height="200px"
                    image="1-1001.jpg"
                  />
                  Создать шаблон для Yandex Market
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
