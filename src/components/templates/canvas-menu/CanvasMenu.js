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

const CanvasMenu = () => {
  const [opened, setOpened] = useState(false);
  const handleChangeOpened = () => {
    setOpened(!opened);
  };
  return (
    <Grid container spacing={-7}>
      <Grid item>
        <Box
          width={120}
          height={550}
          p={3}
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
            width={200}
            height={550}
            p={3}
            borderRight={1}
            sx={{
              borderColor: "grey.500",

              backgroundColor: "#fff",
            }}
          >
            <div>
              {" "}
              <IconButton onClick={handleChangeOpened}>
                <CloseIcon sx={{ color: "#000" }} />
              </IconButton>
            </div>

            <Box mt={2}>
              <IconButton color="inherit">
                <AddPhotoAlternateIcon sx={{ marginRight: "5px" }} />{" "}
                <Typography>Загрузить</Typography>
              </IconButton>
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default CanvasMenu;
