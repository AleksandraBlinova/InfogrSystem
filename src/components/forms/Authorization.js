import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9400d3",
      contrastText: "#fff",
    },
  },
});
export default function Authorization(props) {
  const [curUserName, setCurUserName] = React.useState("");
  const [curUserPassword, setCurUserPassword] = React.useState("");
  const handleChangeUserName = (event) => {
    setCurUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setCurUserPassword(event.target.value);
  };

  const values = {
    username: curUserName.toString(),
    password: curUserPassword.toString(),
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:3001/users/authenticate", values, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("isLog", "true");
          props.setLog("true");
          props.setAuthResult(response.data);
          localStorage.setItem("nameOfUser", response.data.username);
          localStorage.setItem("userId", response.data.id);
        }
      })
      .catch((error) => {
        props.setAuthResult(error);
      });
  };

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
            <Typography component="h1" variant="h5">
              Вход
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="username"
                    label="Имя пользователя"
                    name="username"
                    autoComplete="username"
                    value={curUserName}
                    onChange={handleChangeUserName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={curUserPassword}
                    onChange={handleChangePassword}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Войти
              </Button>
              <Grid container justifyContent="flex-end">
                <Typography>Еще не зарегистрированы? </Typography>&nbsp;
                <Link href="/register" style={{ textDecoration: "none" }}>
                  {" "}
                  Регистрация{" "}
                </Link>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={2} md={3} />
      </Grid>
    </ThemeProvider>
  );
}
