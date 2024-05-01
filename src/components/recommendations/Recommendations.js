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
                  maxWidth: 560,
                  bgcolor: "background.paper",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
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
                          sx={{ display: "inline", fontSize: "20px" }}
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
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
              // <Grid
              //   container
              //   spacing={{ xs: 2, md: 3 }}
              //   columns={{ xs: 4, sm: 8, md: 12 }}
              //   sx={{ padding: "30px" }}
              // >
              //   <Grid item xs={2} sm={4} md={4} key={1}>
              //     {" "}
              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "42px",
              //       }}
              //     >
              //       1. Выбранный маркетплейс: {rec.Marketplace_value}
              //       {rec.Marketplace_value == "Ozon" && (
              //         <img
              //           style={{
              //             width: "50px",
              //             height: "55px",
              //             marginLeft: "5px",
              //             marginBottom: "-20px",
              //           }}
              //           src="/logos/ozon.png"
              //         />
              //       )}
              //       {rec.Marketplace_value == "Wildberries" && (
              //         <img
              //           style={{ width: "50px", height: "55px" }}
              //           src="/logos/wb.png"
              //         />
              //       )}
              //       {rec.Marketplace_value == "Yandex Market" && (
              //         <img
              //           style={{ width: "50px", height: "55px" }}
              //           src="/logos/yam.png"
              //         />
              //       )}
              //     </Typography>
              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "62px",
              //       }}
              //     >
              //       2. Рекомендуемые цвета: {rec.Colors_value}
              //     </Typography>
              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "62px",
              //       }}
              //     >
              //       3. {rec.Background_value}
              //     </Typography>
              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "62px",
              //       }}
              //     >
              //       4. {rec.Watermarks_value}
              //     </Typography>
              //   </Grid>

              //   <Grid item xs={2} sm={4} md={4} key={2}>
              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "42px",
              //       }}
              //     >
              //       5.{" "}
              //       {localStorage.getItem("typeOfPhoto") == "Главное"
              //         ? rec.Mainphoto_value
              //         : rec.Extraphotos_value != null && rec.Extraphotos_value}
              //     </Typography>

              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "62px",
              //       }}
              //     >
              //       6. {rec.Quality_value}
              //     </Typography>

              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "62px",
              //       }}
              //     >
              //       7. {rec.Center_value}
              //     </Typography>
              //   </Grid>

              //   <Grid item xs={2} sm={4} md={4} key={3}>
              //     {" "}
              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "42px",
              //       }}
              //     >
              //       8. {rec.Turn_value}
              //     </Typography>
              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "62px",
              //       }}
              //     >
              //       9. {rec.Infographics_elements_value}
              //     </Typography>
              //     <Typography
              //       sx={{
              //         textAlign: "left",
              //         fontSize: "18px",
              //         fontFamily: "Segoe UI",
              //         paddingTop: "62px",
              //       }}
              //     >
              //       10. {rec.Accessories_value}
              //     </Typography>
              //   </Grid>
              // </Grid>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
