import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9400d3",
      contrastText: "#fff",
    },
  },
});
export default function FormSuccessLog(props) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={2} md={3} />
        <Grid item xs={12} sm={8} md={6} square>
          <Box
            sx={{
              my: 20,
              mx: 7,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ textAlign: "center" }}
            >
              Регистрация прошла успешно.
            </Typography>
            <br></br>
            <Link
              component="h1"
              variant="h5"
              to="/login"
              style={{
                textAlign: "center",
                color: "purple",
                fontSize: "30px",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                  fontSize: "30px", // Nope. Code does not go here.
                },
              }}
            >
              Перейти на страницу для авторизации!
            </Link>
          </Box>
        </Grid>
        <Grid item xs={false} sm={2} md={3} />
      </Grid>
    </ThemeProvider>
  );
}
