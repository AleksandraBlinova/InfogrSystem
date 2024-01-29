import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import axios from "axios";

import CloudIcon from "@mui/icons-material/Cloud";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import ToggleButton from "@mui/material/ToggleButton";
import CircleIcon from "@mui/icons-material/Circle";
import ObjectsForMenu from "./objects/ObjectsForMenu";
import InterestsIcon from "@mui/icons-material/Interests";

import "./CanvasMenu.css";

const CanvasMenu = (props) => {
  const [opened, setOpened] = useState(0);
  const handleChangeOpened = (value) => {
    setOpened(value);
  };

  const [unsplashImagesOnline, setUnsplashImagesOnline] = useState([]);

  const fetchAPIUnsplash = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=RKnG9ADSOyqmCXxJ_9nf3au8Ie-E5kzFcdIkVFIcLNc"
    );
    const data = await response.data;
    setUnsplashImagesOnline(data);
  };

  return (
    <Grid container spacing={-7}>
      <Grid item>
        <Box
          width={120}
          height={550}
          p={2}
          borderRight={1}
          sx={{
            borderColor: "grey.500",

            backgroundColor: "#fff",
          }}
        >
          <Box mt={3}>
            <IconButton color="inherit" onClick={() => handleChangeOpened(1)}>
              <AddPhotoAlternateIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Загрузить</Typography>
            </IconButton>
          </Box>

          <Box mt={3}>
            <IconButton color="inherit" onClick={() => handleChangeOpened(2)}>
              <CloudIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Шаблоны</Typography>
            </IconButton>
          </Box>

          <Box mt={3}>
            <IconButton color="inherit" onClick={() => handleChangeOpened(3)}>
              <FormatColorTextIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Текст</Typography>
            </IconButton>
          </Box>

          <Box mt={3}>
            <IconButton
              color="inherit"
              onClick={() => {
                handleChangeOpened(4);
                fetchAPIUnsplash();
              }}
            >
              <InterestsIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Объекты</Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>

      <Grid item>
        {opened == 1 && (
          <Box
            width={240}
            height={550}
            p={2}
            borderRight={1}
            sx={{
              borderColor: "grey.500",

              backgroundColor: "#fff",
            }}
          >
            <Grid
              container
              spacing={8}
              sx={{ marginLeft: "0px", width: "100%" }}
            >
              <Grid item xs={8}>
                <Typography sx={{ marginTop: "3px" }}>Загрузить</Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton onClick={() => handleChangeOpened(0)}>
                  <CloseIcon
                    sx={{
                      color: "#000",
                      fontSize: "14px",
                    }}
                  />
                </IconButton>
              </Grid>
              <form
                id="form-file-upload"
                onDragEnter={props.handleDrag}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  ref={props.inputRef}
                  type="file"
                  id="input-file-upload"
                  multiple={true}
                  onChange={props.handleChange}
                />
                <label
                  id="label-file-upload"
                  htmlFor="input-file-upload"
                  className={props.dragActive ? "drag-active" : ""}
                >
                  <div>
                    <p>Нажмите или перенесите</p>
                    <button
                      className="upload-button"
                      onClick={props.onButtonClick}
                    >
                      файл для загрузки
                    </button>
                  </div>
                </label>
                {props.dragActive && (
                  <div
                    id="drag-file-element"
                    onDragEnter={props.handleDrag}
                    onDragLeave={props.handleDrag}
                    onDragOver={props.handleDrag}
                    onDrop={props.handleDrop}
                  ></div>
                )}
              </form>
              <Grid sx={{ textAlign: "center", marginTop: "30px" }}>
                <Typography sx={{ marginTop: "3px", textAlign: "center" }}>
                  Доступные расширения для загрузки:
                </Typography>
              </Grid>
              <Grid
                container
                spacing={3}
                sx={{
                  marginTop: "-3px",
                  textAlign: "center",
                  marginLeft: "0px",
                }}
              >
                <Grid item xs={3}>
                  <Typography>
                    {" "}
                    <CircleIcon sx={{ fontSize: "7px", marginRight: "4px" }} />
                    jpg
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    {" "}
                    <CircleIcon sx={{ fontSize: "7px", marginRight: "4px" }} />
                    png
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    {" "}
                    <CircleIcon sx={{ fontSize: "7px", marginRight: "4px" }} />
                    svg
                  </Typography>
                </Grid>
              </Grid>
            </Grid>{" "}
          </Box>
        )}
        {opened == 2 && (
          <Box
            width={240}
            height={550}
            p={2}
            borderRight={1}
            sx={{
              borderColor: "grey.500",

              backgroundColor: "#fff",
            }}
          >
            <Grid
              container
              spacing={8}
              sx={{ marginLeft: "0px", width: "100%" }}
            >
              <Grid item xs={8}>
                <Typography sx={{ marginTop: "3px" }}>Шаблоны</Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton onClick={() => handleChangeOpened(0)}>
                  <CloseIcon
                    sx={{
                      color: "#000",
                      fontSize: "14px",
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>{" "}
          </Box>
        )}
        {opened == 3 && (
          <Box
            width={240}
            height={550}
            p={2}
            borderRight={1}
            sx={{
              borderColor: "grey.500",

              backgroundColor: "#fff",
            }}
          >
            <Grid
              container
              spacing={8}
              sx={{ marginLeft: "0px", width: "100%" }}
            >
              <Grid item xs={8}>
                <Typography sx={{ marginTop: "3px" }}>Текст</Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton onClick={() => handleChangeOpened(0)}>
                  <CloseIcon
                    sx={{
                      color: "#000",
                      fontSize: "14px",
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>{" "}
          </Box>
        )}
        {opened == 4 && (
          <Box
            width={240}
            height={550}
            p={2}
            borderRight={1}
            sx={{
              borderColor: "grey.500",
              overflowY: "auto",
              backgroundColor: "#fff",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                backgroundColor: "rgba(0,0,0,.1)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#a6a6a7",
              },
            }}
          >
            <Grid
              container
              spacing={8}
              sx={{ marginLeft: "0px", width: "100%" }}
            >
              <Grid item xs={8}>
                <Typography sx={{ marginTop: "3px", fontWeight: "600" }}>
                  Объекты
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton onClick={() => handleChangeOpened(0)}>
                  <CloseIcon
                    sx={{
                      color: "#000",
                      fontSize: "14px",
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>{" "}
            <ObjectsForMenu unsplashImagesOnline={unsplashImagesOnline} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default CanvasMenu;
