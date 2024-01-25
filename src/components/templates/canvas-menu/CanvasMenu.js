import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import CloudIcon from "@mui/icons-material/Cloud";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import ToggleButton from "@mui/material/ToggleButton";
import CircleIcon from "@mui/icons-material/Circle";

import "./CanvasMenu.css";

const CanvasMenu = () => {
  const [opened, setOpened] = useState(false);
  const handleChangeOpened = () => {
    setOpened(!opened);
  };

  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    console.log(e.dataTransfer.files[0]);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
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
            <IconButton color="inherit" onClick={() => handleChangeOpened()}>
              <AddPhotoAlternateIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Загрузить</Typography>
            </IconButton>
          </Box>

          <Box mt={3}>
            <IconButton color="inherit" onClick={() => handleChangeOpened()}>
              <CloudIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Шаблоны</Typography>
            </IconButton>
          </Box>

          <Box mt={3}>
            <IconButton color="inherit" onClick={() => handleChangeOpened()}>
              <FormatColorTextIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Текст</Typography>
            </IconButton>
          </Box>

          <Box mt={3}>
            <IconButton color="inherit" onClick={() => handleChangeOpened()}>
              <WorkspacesIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Объекты</Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>

      <Grid item>
        {opened == true && (
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
                <IconButton onClick={handleChangeOpened}>
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
                onDragEnter={handleDrag}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  ref={inputRef}
                  type="file"
                  id="input-file-upload"
                  multiple={true}
                  onChange={handleChange}
                />
                <label
                  id="label-file-upload"
                  htmlFor="input-file-upload"
                  className={dragActive ? "drag-active" : ""}
                >
                  <div>
                    <p>Нажмите или перенесите</p>
                    <button className="upload-button" onClick={onButtonClick}>
                      файл для загрузки
                    </button>
                  </div>
                </label>
                {dragActive && (
                  <div
                    id="drag-file-element"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
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
      </Grid>
    </Grid>
  );
};

export default CanvasMenu;
