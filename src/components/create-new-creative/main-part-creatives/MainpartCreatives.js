import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Grid from "@mui/material/Grid";
import {
  CardActionArea,
  CardHeader,
  IconButton,
  CardActions,
  Tooltip,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const MainpartCreatives = () => {
  const [projectsAttributes, setProjectsAttributes] = React.useState([]);

  const [count, setCount] = React.useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/project_attributes",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        response.data.map((itm) => {
          let dateCr = itm.createdAt.slice(0, itm.createdAt.lastIndexOf("T"));
          var dd = new Date(dateCr),
            monthh = "" + (dd.getMonth() + 1),
            dayy = "" + dd.getDate(),
            yearr = dd.getFullYear();

          if (monthh.length < 2) monthh = "0" + monthh;
          if (dayy.length < 2) dayy = "0" + dayy;

          let dateCrNew = [dayy, monthh, yearr].join("-");

          itm.createdAt = dateCrNew;

          var d = new Date(),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

          var difference = Math.floor((d - dd) / (1000 * 60 * 60 * 24));

          itm.difference = difference;
        });
        setProjectsAttributes(response.data);
        setCount(true);
        console.log("projectsAttributes", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (count) {
      axios({
        method: "GET",
        url: "http://localhost:3001/projects",
        headers: {
          "content-type": "application/json",
          withCredentials: true,
        },
      })
        .then((response) => {
          let prjs = response.data.filter(
            (i) => i.UserId == Number(localStorage.getItem("userId"))
          );
          setProjects(prjs);
          let newArr = [];

          projectsAttributes &&
            projectsAttributes.forEach((i) => {
              prjs &&
                prjs.forEach((j) => {
                  if (i.Id == j.Id) newArr.push(i);
                });
            });

          setProjectsAttributes(newArr);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [count]);

  const [isHovered, setIsHovered] = React.useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <div>
      {" "}
      <Box sx={{ display: "flex", padding: "70px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: "50px",
            width: "700px",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontSize: "50px",
              fontWeight: "500",
              textAlign: "left",
              marginTop: "30px",
            }}
          >
            Мои проекты
          </Typography>

          <Box sx={{ marginTop: "50px" }}>
            <Button variant="extended" href="/newproject">
              <AddIcon sx={{ width: "20px", marginRight: "6px" }} />
              Создать новый проект
            </Button>
          </Box>

          <Box sx={{ marginTop: "80px" }}>
            {" "}
            <Divider textAlign="left" />
          </Box>
          <Box sx={{ marginTop: "30px", marginLeft: "30px" }}>
            <Button variant="contained" color="secondary">
              <FolderSpecialIcon
                sx={{ width: "20px", marginRight: "6px", marginBottom: "2px" }}
              />
              Мои проекты
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginLeft: "50px", minHeight: "400px" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {projectsAttributes &&
              projectsAttributes.map((project) => (
                <Grid item xs={12}>
                  <Box>
                    <Link
                      to={
                        project.MarketplaceId == 1
                          ? "/withouttempOzon"
                          : project.MarketplaceId == 2
                          ? "/withouttempWB"
                          : "/withouttempYM"
                      }
                      state={project.CanvasSet}
                    >
                      <Card
                        sx={{
                          maxWidth: 250,
                          marginRight: "10px",
                          borderRadius: "0px",
                        }}
                      >
                        <CardActionArea
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                          onClick={() => {
                            localStorage.setItem("projectId", project.Id);
                            localStorage.setItem(
                              "projectAttributeId",
                              project.Id
                            );
                          }}
                        >
                          <>
                            <Tooltip
                              title={
                                <Typography fontSize={15}>
                                  {project.difference != 0 &&
                                  project.difference > 5
                                    ? "создан " +
                                      project.difference +
                                      " дней назад"
                                    : project.difference == 1
                                    ? "создан вчера"
                                    : project.difference == 0
                                    ? "создан сегодня"
                                    : project.difference > 1 &&
                                      project.difference < 5
                                    ? "создан " +
                                      project.difference +
                                      " дня назад"
                                    : ""}
                                </Typography>
                              }
                              slotProps={{
                                popper: {
                                  modifiers: [
                                    {
                                      name: "offset",
                                      options: {
                                        offset: [0, -10],
                                      },
                                    },
                                  ],
                                },
                              }}
                            >
                              {" "}
                              <CardMedia
                                component="img"
                                width="250px"
                                height="300px"
                                image={
                                  project.CanvasUrl
                                    ? project.CanvasUrl.replace("&quot;", "")
                                    : "./6391435521.jpg"
                                }
                                sx={{
                                  "&:hover": {
                                    "*": "inherit",
                                  },
                                  borderRadius: "0px",
                                }}
                              />
                            </Tooltip>
                          </>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default MainpartCreatives;
