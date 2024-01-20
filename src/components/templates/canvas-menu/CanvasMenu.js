import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloudIcon from "@mui/icons-material/Cloud";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import { Link } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./CanvasMenuStyles";

const CanvasMenu = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
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
      <ItemsList>
        <ItemContainer key={1}>
          <Link>
            <ItemWrapper>
              <ItemName displaySidebar={displaySidebar}></ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      </ItemsList>
      <Box mt={2}>
        <IconButton color="inherit">
          <AddPhotoAlternateIcon sx={{ marginRight: "5px" }} />{" "}
          <Typography>Загрузить</Typography>
        </IconButton>
      </Box>

      <Box mt={2}>
        <IconButton color="inherit">
          <CloudIcon sx={{ marginRight: "5px" }} />{" "}
          <Typography>Шаблоны</Typography>
        </IconButton>
      </Box>

      <Box mt={2}>
        <IconButton color="inherit">
          <FormatColorTextIcon sx={{ marginRight: "5px" }} />{" "}
          <Typography>Текст</Typography>
        </IconButton>
      </Box>

      <Box mt={2}>
        <IconButton color="inherit">
          <WorkspacesIcon sx={{ marginRight: "5px" }} />{" "}
          <Typography>Объекты</Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default CanvasMenu;
