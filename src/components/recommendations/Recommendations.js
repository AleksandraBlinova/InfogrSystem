import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Recommendations = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const [recomendations, setRecomendations] = useState();

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/recomendations",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setRecomendations(
          response.data &&
            response.data.filter(
              (r) =>
                r.Marketplace_value === localStorage.getItem("chosMarketPL") &&
                r.Temp_value === localStorage.getItem("needTemplateMarketPL")
            )
        );
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
      <div className="main-container-recomend">
        {" "}
        <Grid container sx={{ marginTop: "40px" }}>
          <Grid item xs={4} sx={{ marginLeft: "40px" }}>
            {" "}
            <IconButton href="/chooseUserAttributes">
              <KeyboardBackspaceIcon sx={{ fontSize: "30px", color: "#000" }} />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "Segoe UI",
                fontWeight: "500",
              }}
            >
              Рекомендации для инфографики
            </Typography>
          </Grid>
        </Grid>
        <div>
          {recomendations &&
            recomendations.map((rec, index) => (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 900,
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: 500,
                  margin: "0 auto",
                  marginTop: "40px",
                  "& ul": { padding: 0 },
                }}
                subheader={<li />}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    {rec.Marketplace_value == "Ozon" && (
                      <img
                        style={{
                          width: "50px",
                          height: "55px",
                        }}
                        src="/logos/ozon.png"
                      />
                    )}
                    {rec.Marketplace_value == "Wildberries" && (
                      <img
                        style={{ width: "50px", height: "55px" }}
                        src="/logos/wb.png"
                      />
                    )}
                    {rec.Marketplace_value == "Yandex Market" && (
                      <img
                        style={{ width: "45px", height: "55px" }}
                        src="/logos/yam.png"
                      />
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary="1. Выбранный маркетплейс:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "18px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Marketplace_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/colors.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="2. Рекомендуемые цвета:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Colors_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/bg.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="3. Задний фон:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Background_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/watermark.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="4. Водяные знаки:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Watermarks_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/photos.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      "5. " +
                      (localStorage.getItem("typeOfPhoto") == "Главное"
                        ? "Главное фото: "
                        : "Дополнительные фото: ")
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {localStorage.getItem("typeOfPhoto") == "Главное"
                            ? rec.Mainphoto_value
                            : rec.Extraphotos_value != null &&
                              rec.Extraphotos_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/photo quality.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="6. Качество фотографий:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Quality_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/center.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="7. Размещение фотографий:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Center_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/turn.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="8. Поворот фотографий:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Turn_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/elements.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="9. Элементы инфографики на товаре:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Infographics_elements_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="/logos/accessories.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="10. Аксессуары и комплекты товаров:"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline", fontSize: "14px" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {rec.Accessories_value}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
