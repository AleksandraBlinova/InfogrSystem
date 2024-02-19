import React from "react";
import { Grid, Button, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormatSizeIcon from "@mui/icons-material/FormatSize";

const CanvasProjects = ({
  allObjectsOnCURRENTStage,
  allObjectsOnStage,
  addNewCurrentStage,
  currentStageIndex,
  numberOfStages,
}) => {
  console.log(numberOfStages.map((item) => item));
  return (
    <Box>
      {numberOfStages.map((item) => (
        <Box
          width={250}
          p={2}
          border={1}
          sx={{
            borderColor: "grey.500",
            marginLeft: "80px",
            marginTop: "50px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={9}>
              <Typography>Слайд {item}</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <DeleteIcon sx={{ color: "grey", fontSize: "20px" }} />{" "}
              <ContentCopyIcon sx={{ color: "grey", fontSize: "20px" }} />
            </Grid>
          </Grid>
        </Box>
      ))}

      {allObjectsOnCURRENTStage.map((i) => (
        <Box
          sx={{
            marginLeft: "80px",
            backgroundColor: "#bdbdbd",
            borderRadius: "0",
            width: "282px",
            height: "50px",
            border: "1px solid #9e9e9e",
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
                {(i.typeofImage.includes("icon") ||
                  i.typeofImage.includes("emoji")) && (
                  <Typography sx={{ marginTop: "12px" }}>Иконка</Typography>
                )}
                {(i.typeofImage.includes("unsplash") ||
                  i.typeofImage.includes("drag_drop")) && (
                  <Typography sx={{ marginTop: "12px" }}>
                    Изображение
                  </Typography>
                )}
                {i.typeofImage.includes("figure") && (
                  <Typography sx={{ marginTop: "12px" }}>Фигура</Typography>
                )}
                {i.typeofImage.includes("line") && (
                  <Typography sx={{ marginTop: "12px" }}>Линия</Typography>
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
