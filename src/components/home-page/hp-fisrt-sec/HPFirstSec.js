import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./HPFirstSec.css";

export default function HPFirstSec() {
  return (
    <div>
      <Box sx={{ display: "flex", padding: "70px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontSize: "45px",
              fontWeight: "500",
              textAlign: "left",
              marginTop: "50px",
            }}
          >
            Создавайте профессиональный дизайн инфографики быстро и легко
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ marginTop: "50px", fontSize: "23px" }}
          >
            Создавайте контент и карточки для маркетплейсов, инфографику для них
            по готовым шаблонам по правилам каждого маркетплейса
          </Typography>
          <Box sx={{ display: "flex", alignItems: "left", marginTop: "20px" }}>
            <Button
              variant="contained"
              color="secondary"
              className="get-started"
              sx={{ backgroundColor: "#000", color: "white" }}
              href="/createnewcreative"
            >
              Начать работу
            </Button>
          </Box>
        </Box>
        <div>
          <img src="start.PNG" className="main_video_ru_poster"></img>
        </div>
      </Box>
    </div>
  );
}
