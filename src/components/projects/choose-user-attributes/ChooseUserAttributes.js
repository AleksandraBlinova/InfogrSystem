import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import InfoIcon from "@mui/icons-material/Info";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const ChooseUserAttributes = () => {
  const [marketplaces, setMarketplaces] = React.useState();

  const [curMarketplace, setCurMarketplace] = React.useState(
    localStorage.getItem("chosMarketPL")
  );

  const handleChangeCurMarketplace = (event) => {
    setCurMarketplace(event.target.value);
  };

  const [curCategory, setCurCategory] = React.useState("");

  const handleChangeCurCategory = (event) => {
    setCurCategory(event.target.value);
  };

  const [curTypeOfPhoto, setCurTypeOfPhoto] = React.useState("Главное");

  const handleChangeCurTypeOfPhoto = (event) => {
    setCurTypeOfPhoto(event.target.value);
  };

  const [complect, setComplect] = React.useState("Нет");

  const handleChangeComplect = (event) => {
    setComplect(event.target.value);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/marketplaces",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        console.log("res", response.data);
        setMarketplaces(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl" style={{ backgroundColor: "#000" }}>
          <Toolbar disableGutters>
            <Link to="/">
              <img
                src="./logo.jpg"
                style={{ width: "150px", height: "35px", marginRight: "5px" }}
              />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="main-part-user-attributes">
        <div style={{ marginTop: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "30px",
              fontFamily: "Segoe UI",
              fontWeight: "500",
            }}
          >
            Ваши атрибуты
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: "60px", paddingLeft: "40px" }}
        >
          <Grid item xs={4} sx={{ display: "-webkit-inline-flex" }}>
            <Tooltip title="Маркетплейс для которого хотите создать инфографику">
              <IconButton
                sx={{
                  marginRight: "15px",
                  marginLeft: "0px",
                  padding: "0px",
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "Segoe UI",
                paddingTop: "12px",
              }}
            >
              1. Выбранный маркетплейс:
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 250,
                marginLeft: "50px",
                float: "left",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Маркетплейс
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  value={curMarketplace}
                  label="Маркетплейс"
                  onChange={handleChangeCurMarketplace}
                >
                  {marketplaces &&
                    marketplaces.map((itm, index) => (
                      <MenuItem key={itm.Id} value={itm.Marketplace_name}>
                        {itm.Marketplace_name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: "70px", paddingLeft: "40px" }}
        >
          <Grid item xs={4} sx={{ display: "-webkit-inline-flex" }}>
            <Tooltip title="Категория вашего товара для инфографики">
              <IconButton
                sx={{
                  marginRight: "15px",
                  marginLeft: "0px",
                  padding: "0px",
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "Segoe UI",
                paddingTop: "12px",
              }}
            >
              2. Выберите категорию вашего товара:
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 250,
                marginLeft: "50px",
                float: "left",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={curCategory}
                  label="Категория"
                  onChange={handleChangeCurCategory}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: "70px", paddingLeft: "40px" }}
        >
          <Grid item xs={4} sx={{ display: "-webkit-inline-flex" }}>
            <Tooltip title="Для какого типа фото вы будете создавать инфографику: для главного или дополнительного">
              <IconButton
                sx={{
                  marginRight: "15px",
                  marginLeft: "0px",
                  padding: "0px",
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "Segoe UI",
                paddingTop: "12px",
              }}
            >
              3. Выберите тип фото для инфографики:
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 250,
                marginLeft: "50px",
                float: "left",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={curTypeOfPhoto}
                  label="Тип"
                  onChange={handleChangeCurTypeOfPhoto}
                >
                  <MenuItem value="Главное">Главное</MenuItem>
                  <MenuItem value="Дополнительное">Дополнительное</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ marginTop: "70px", paddingLeft: "40px" }}
        >
          <Grid item xs={4} sx={{ display: "-webkit-inline-flex" }}>
            <Tooltip title="Если товар состоит из нескольких вещей, тогда он является комплектом, иначе - нет">
              <IconButton
                sx={{
                  marginRight: "15px",
                  marginLeft: "0px",
                  padding: "0px",
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "20px",
                fontFamily: "Segoe UI",
                paddingTop: "12px",
              }}
            >
              4. Товар является комплектом:
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 250,
                marginLeft: "50px",
                float: "left",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Комплект</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={complect}
                  label="Комплект"
                  onChange={handleChangeComplect}
                >
                  <MenuItem value="Да">Да</MenuItem>
                  <MenuItem value="Нет">Нет</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ChooseUserAttributes;
