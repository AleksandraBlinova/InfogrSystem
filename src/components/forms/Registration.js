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
export default function Registration(props) {
  const [curUserFirstName, setCurUserFirstName] = React.useState("");
  const [curUserLastName, setCurUserLastName] = React.useState("");
  const [curUserPassword, setCurUserPassword] = React.useState("");
  const [curUserName, setCurUserName] = React.useState("");
  const handleChangeUserFirstName = (event) => {
    setCurUserFirstName(event.target.value);
  };
  const handleChangeUserLastName = (event) => {
    setCurUserLastName(event.target.value);
  };
  const handleChangeUserName = (event) => {
    setCurUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setCurUserPassword(event.target.value);
  };

  const values = {
    firstName: curUserFirstName.toString(),
    lastName: curUserLastName.toString(),
    password: curUserPassword.toString(),
    username: curUserName.toString(),
    role: "user",
  };

  let authResult = "";

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:3001/users/register", values, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          props.handleChangeIsRegister("true");
        }
      })
      .catch((error) => {
        authResult = error.response.data.message;
        console.log(authResult);
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
              Регистрация
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Имя"
                    autoFocus
                    value={curUserFirstName}
                    onChange={handleChangeUserFirstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Фамилия"
                    name="lastName"
                    autoComplete="family-name"
                    value={curUserLastName}
                    onChange={handleChangeUserLastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
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
                    required
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
                Регистрация
              </Button>
              <Grid container justifyContent="flex-end">
                <Typography>Уже зарегистрированы? </Typography>&nbsp;
                <Link href="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  Вход{" "}
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
