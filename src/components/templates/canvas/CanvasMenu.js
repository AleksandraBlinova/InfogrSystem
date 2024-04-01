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

import TextArea from "./text-area/TextArea";

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
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import BackgroundObjects from "./background-objects/BackgroundObjects";
import PaletteIcon from "@mui/icons-material/Palette";
import BackgroundColors from "./background-objects/BackgroundColors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import "./CanvasMenu.css";
import TemplatesContainer from "../templates-ozon/TemplatesContainer";
import Verifier from "../../verification/Verifier";

const CanvasMenu = (props) => {
  const [opened, setOpened] = useState(1);
  const handleChangeOpened = (value) => {
    setOpened(value);
  };

  const [showCloseBut, setShowCloseBut] = useState(-1);
  const handleMouseEnter = (e) => {
    setShowCloseBut(e);
  };
  const handleMouseLeave = (e) => {
    setShowCloseBut(-1);
  };

  return (
    <Grid container spacing={-7}>
      <Grid item>
        <Box
          width={120}
          height={635}
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
                props.fetchAPIUnsplash();
              }}
            >
              <InterestsIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Объекты</Typography>
            </IconButton>
          </Box>

          <Box mt={3}>
            <IconButton
              color="inherit"
              onClick={() => {
                handleChangeOpened(5);
              }}
            >
              <WallpaperIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Фон</Typography>
            </IconButton>
          </Box>
          <Box mt={3}>
            <IconButton
              color="inherit"
              onClick={() => {
                handleChangeOpened(6);
              }}
            >
              <PaletteIcon sx={{ marginRight: "5px" }} />{" "}
              <Typography>Цвет</Typography>
            </IconButton>
          </Box>

          <Box mt={3}>
            <IconButton
              color="inherit"
              onClick={() => {
                handleChangeOpened(7);
              }}
            >
              <AutoFixHighIcon
                sx={{
                  marginRight: "5px",
                  color: "#CE1A35",
                }}
              />{" "}
              <Typography>Проверить</Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>

      <Grid item>
        {opened == 1 && (
          <Box
            width={250}
            height={635}
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
                  Загрузить
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
                  marginTop: "0px",
                  textAlign: "center",
                  marginLeft: "0px",
                  marginBottom: "-20px",
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
              <Grid item>
                <Typography sx={{ marginLeft: "-10px" }}>
                  История загрузок:
                </Typography>
              </Grid>
              <Grid
                container
                spacing={3}
                sx={{
                  marginTop: "0px",
                  textAlign: "center",
                  marginLeft: "0px",
                  marginBottom: "-20px",
                }}
              >
                {props.uploadedImagesDrDr.map((imgSrc, index) => (
                  <Grid item sx={{ position: "relative" }}>
                    {showCloseBut == index && (
                      <IconButton
                        sx={{
                          position: "absolute",
                          right: "0px",
                          zIndex: 10,
                        }}
                        onClick={() => props.removeImgFromHistory(imgSrc)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <CloseIcon
                          sx={{
                            color: "#000",
                            fontSize: "20px",
                          }}
                        />
                      </IconButton>
                    )}{" "}
                    <img
                      src={imgSrc}
                      value={index}
                      style={{
                        width: "90px",
                        height: "110px",
                        marginBottom: "20px",
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => props.handleChangeImgFromHist(imgSrc)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>{" "}
          </Box>
        )}
        {opened == 2 && (
          <Box
            width={240}
            height={635}
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
              spacing={2}
              sx={{ marginLeft: "0px", width: "100%" }}
            >
              <Grid item xs={10}>
                {props.typeOfMarketplace == "ozon" && (
                  <Typography sx={{ marginTop: "3px", fontWeight: "600" }}>
                    Шаблоны Ozon
                  </Typography>
                )}
                {props.typeOfMarketplace == "wb" && (
                  <Typography sx={{ marginTop: "3px", fontWeight: "600" }}>
                    Шаблоны Wildberries
                  </Typography>
                )}
                {props.typeOfMarketplace == "ym" && (
                  <Typography sx={{ marginTop: "3px", fontWeight: "600" }}>
                    Шаблоны Yandex Market
                  </Typography>
                )}
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={() => handleChangeOpened(0)}>
                  <CloseIcon
                    sx={{
                      color: "#000",
                      fontSize: "14px",
                    }}
                  />
                </IconButton>
              </Grid>

              <TemplatesContainer
                handleChangeClickOnUnsplash={props.handleChangeClickOnUnsplash}
              />
            </Grid>{" "}
          </Box>
        )}
        {opened == 3 && (
          <Box
            width={240}
            height={635}
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
                <Typography sx={{ marginTop: "3px", fontWeight: "600" }}>
                  Текст
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
            <TextArea
              addText={props.addText}
              textInputRef={props.textInputRef}
              changeTextStyle={props.changeTextStyle}
            />
          </Box>
        )}
        {opened == 4 && (
          <Box
            width={240}
            height={635}
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
            <ObjectsForMenu
              unsplashImagesOnline={props.unsplashImagesOnline}
              handleChangeClickOnUnsplash={props.handleChangeClickOnUnsplash}
            />
          </Box>
        )}
        {opened == 5 && (
          <Box
            width={240}
            height={635}
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
                  Фон
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
            <BackgroundObjects
              unsplashTextures={props.unsplashTextures}
              unsplashImagesOnline={props.unsplashImagesOnline}
              unsplashPhotoGradients={props.unsplashPhotoGradients}
              unsplashAbstracts={props.unsplashAbstracts}
              unsplashWater={props.unsplashWater}
              handleChangeClickOnUnsplash={props.handleChangeClickOnUnsplash}
              changeBackgroundLinesFigures={props.changeBackgroundLinesFigures}
            />
          </Box>
        )}
        {opened == 6 && (
          <Box
            width={240}
            height={635}
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
                  Цвет
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
            <BackgroundColors
              changeBackgroundLinesFigures={props.changeBackgroundLinesFigures}
            />
          </Box>
        )}
      </Grid>

      {opened == 7 && (
        <Box
          width={240}
          height={635}
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
          <Grid container spacing={8} sx={{ marginLeft: "0px", width: "100%" }}>
            <Grid item xs={8}>
              <Typography
                sx={{
                  marginTop: "3px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Проверить инфографику
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
          <Grid sx={{ marginTop: "50px" }}>
            {" "}
            <Verifier />
          </Grid>
        </Box>
      )}
    </Grid>
  );
};

export default CanvasMenu;
