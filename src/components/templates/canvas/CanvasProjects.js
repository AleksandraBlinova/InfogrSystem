import React from "react";
import {
  Grid,
  Button,
  Box,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormatSizeIcon from "@mui/icons-material/FormatSize";

const CanvasProjects = ({
  allObjectsOnCURRENTStage,
  allObjectsOnStage,
  addNewCurrentStage,
  currentStageIndex,
  numberOfStages,
  changeCurrentStage,
  deleteCurrentStage,
  copyExistedSlide,
}) => {
  return (
    <Box>
      {numberOfStages.map((item) => (
        <>
          <Box
            width={250}
            p={2}
            sx={{
              borderColor: "grey.500",
              marginLeft: "80px",
              marginTop: "50px",
              border:
                item == currentStageIndex
                  ? "1px solid #aa00ff"
                  : "1px solid grey",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Typography
                  onClick={() => {
                    changeCurrentStage(item);
                  }}
                >
                  Слайд {item}
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <DeleteIcon
                  sx={{ color: "grey", fontSize: "20px" }}
                  onClick={() => {
                    changeCurrentStage(item - 1);
                    deleteCurrentStage(item);
                  }}
                />{" "}
                <ContentCopyIcon
                  sx={{ color: "grey", fontSize: "20px", marginLeft: "20px" }}
                  onClick={() => {
                    copyExistedSlide(item);
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {allObjectsOnCURRENTStage.map((i) =>
            currentStageIndex === item && item === i.slideIndex ? (
              <Box
                sx={{
                  marginLeft: "80px",
                  backgroundColor: "#bdbdbd",
                  borderRadius: "0",
                  width: "282px",
                  height: "50px",
                  borderLeft: "1px solid grey",
                  borderBottom: "1px solid grey",
                  borderRight: "1px solid grey",
                }}
              >
                {i.type == "image" && (
                  <Grid container>
                    {" "}
                    <Grid item xs={4}>
                      {" "}
                      <img
                        src={i.image.src}
                        style={{
                          width: "30px",
                          height: "30px",
                          marginLeft: "20px",
                          marginTop: "9px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      {((i.typeofImage && i.typeofImage.includes("icon")
                        ? i.typeofImage.includes("icon")
                        : "") ||
                        (i.typeofImage && i.typeofImage.includes("emoji")
                          ? i.typeofImage.includes("emoji")
                          : "")) && (
                        <Typography sx={{ marginTop: "12px" }}>
                          Иконка
                        </Typography>
                      )}
                      {((i.typeofImage && i.typeofImage.includes("unsplash")
                        ? i.typeofImage.includes("unsplash")
                        : "") ||
                        (i.typeofImage && i.typeofImage.includes("drag_drop")
                          ? i.typeofImage.includes("drag_drop")
                          : "")) && (
                        <Typography sx={{ marginTop: "12px" }}>
                          Изображение
                        </Typography>
                      )}
                      {(i.typeofImage && i.typeofImage.includes("figure")
                        ? i.typeofImage.includes("figure")
                        : "") && (
                        <Typography sx={{ marginTop: "12px" }}>
                          Фигура
                        </Typography>
                      )}
                      {i.typeofImage && i.typeofImage.includes("line")
                        ? i.typeofImage.includes("line")
                        : "" && (
                            <Typography sx={{ marginTop: "12px" }}>
                              Линия
                            </Typography>
                          )}
                    </Grid>
                  </Grid>
                )}
                {i.type == "text" && (
                  <Grid container>
                    {" "}
                    <Grid item xs={4}>
                      {" "}
                      <FormatSizeIcon
                        sx={{
                          marginLeft: "20px",
                          marginTop: "12px",
                          color: "#424242",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <Typography sx={{ marginTop: "12px" }}>Текст</Typography>
                    </Grid>
                  </Grid>
                )}
              </Box>
            ) : null
          )}
        </>
      ))}

      <Box
        sx={{
          marginLeft: "80px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#616161",
            borderRadius: "0px",
            "&:hover": {
              backgroundColor: "#607d8b",
            },
          }}
          onClick={addNewCurrentStage}
        >
          Добавить слайд
        </Button>
      </Box>
    </Box>
  );
};

export default CanvasProjects;
