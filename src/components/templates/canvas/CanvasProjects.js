import React from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CanvasProjects = () => {
  return (
    <Box
      width={250}
      height={135}
      p={2}
      border={1}
      sx={{
        borderColor: "grey.500",
        backgroundColor: "#fff",
        marginLeft: "80px",
        marginTop: "50px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Typography>Слайд 1</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <DeleteIcon sx={{ color: "grey", fontSize: "20px" }} />{" "}
          <ContentCopyIcon sx={{ color: "grey", fontSize: "20px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CanvasProjects;
