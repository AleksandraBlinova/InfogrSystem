import React, { useEffect, useState } from "react";
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
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ChooseUserAttributes = () => {
  const [marketplaces, setMarketplaces] = React.useState();

  const [curMarketplace, setCurMarketplace] = React.useState(
    localStorage.getItem("chosMarketPL")
  );

  const handleChangeCurMarketplace = (event) => {
    setCurMarketplace(event.target.value);
    localStorage.setItem("chosMarketPL", event.target.value);
    localStorage.setItem("needTemplateMarketPL", "no");
  };

  const [categories, setCategories] = React.useState();

  const [curCategory, setCurCategory] = React.useState(
    localStorage.getItem("category")
  );

  const handleChangeCurCategory = (event) => {
    setCurCategory(event.target.value);
    localStorage.setItem("category", event.target.value);
  };

  const [curTypeOfPhoto, setCurTypeOfPhoto] = React.useState(
    localStorage.getItem("typeOfPhoto")
  );

  const handleChangeCurTypeOfPhoto = (event) => {
    setCurTypeOfPhoto(event.target.value);
    localStorage.setItem("typeOfPhoto", event.target.value);
  };

  const [complect, setComplect] = React.useState(
    localStorage.getItem("complect")
  );

  const handleChangeComplect = (event) => {
    setComplect(event.target.value);
    localStorage.setItem("complect", event.target.value);
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
        setMarketplaces(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/categories",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        let arr = response.data.filter((itm) => itm.isAllowed != "false");
        setCategories(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [projects, setProjects] = useState();
  let [projId, setProjId] = useState();
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/projects",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setProjects(response.data);
        setProjId(response.data.length + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [projectAttr, setProjectAttr] = useState();
  let [projAttrId, setProAttrjId] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/project_attributes",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setProjectAttr(response.data);
        setProAttrjId(response.data.length + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [users, setUsers] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/users/getUsers",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  let projValues = {};

  let projAttribValues = {};
  let usrName =
    users &&
    users.find((u) => u.username == localStorage.getItem("nameOfUser"));

  let markplId =
    marketplaces &&
    marketplaces.find(
      (m) => m.Marketplace_name == localStorage.getItem("chosMarketPL")
    );

  const createNewProject = () => {
    projValues = {
      Id: projId,
      Project_name: "Project" + projId.toString(),
      Constructor_tables_id: 1,
      Username: usrName.username,
      UserId: usrName.id,
    };
    projAttribValues = {
      Id: projAttrId,
      ProjectId: projId,
      Category: localStorage.getItem("category"),
      TypeOfPhoto: localStorage.getItem("typeOfPhoto"),
      hasSet: localStorage.getItem("complect"),
      MarketplaceId: markplId.Id,
    };
    axios
      .post("http://localhost:3001/projects/createproject", projValues, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post(
        "http://localhost:3001/project_attributes/createprojectattribute",
        projAttribValues,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <Grid container sx={{ marginTop: "40px" }}>
          <Grid item xs={5} sx={{ marginLeft: "40px" }}>
            {" "}
            <IconButton href="/newproject">
              <KeyboardBackspaceIcon sx={{ fontSize: "30px", color: "#000" }} />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "Segoe UI",
                fontWeight: "500",
              }}
            >
              Ваши атрибуты
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={9}>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "50px", paddingLeft: "40px" }}
            >
              <Grid item xs={5} sx={{ display: "-webkit-inline-flex" }}>
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
              <Grid item xs={5}>
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
              <Grid item xs={0}></Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ marginTop: "70px", paddingLeft: "40px" }}
            >
              <Grid item xs={5} sx={{ display: "-webkit-inline-flex" }}>
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
              <Grid item xs={5}>
                <Box
                  sx={{
                    width: 250,
                    marginLeft: "50px",
                    float: "left",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Категория
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={curCategory}
                      label="Категория"
                      onChange={handleChangeCurCategory}
                    >
                      {categories &&
                        categories.map((itm, index) => (
                          <MenuItem key={itm.Id} value={itm.Category_name}>
                            {itm.Category_name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={0}></Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ marginTop: "70px", paddingLeft: "40px" }}
            >
              <Grid item xs={5} sx={{ display: "-webkit-inline-flex" }}>
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
              <Grid item xs={5}>
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
              <Grid item xs={0}></Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ marginTop: "70px", paddingLeft: "40px" }}
            >
              <Grid item xs={5} sx={{ display: "-webkit-inline-flex" }}>
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
              <Grid item xs={5}>
                <Box
                  sx={{
                    width: 250,
                    marginLeft: "50px",
                    float: "left",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Комплект
                    </InputLabel>
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
              <Grid item xs={0}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            {localStorage.getItem("needTemplateMarketPL") &&
              localStorage.getItem("needTemplateMarketPL") != "no" && (
                <>
                  <Grid sx={{ marginTop: "50px" }}>
                    {" "}
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "Segoe UI",
                        paddingTop: "12px",
                        marginLeft: "7%",
                      }}
                    >
                      Выбранный шаблон:
                    </Typography>
                  </Grid>
                  <Grid sx={{ marginTop: "30px" }}>
                    {localStorage.getItem("needTemplateMarketPL") ==
                      "basketball" && (
                      <img
                        src="./БаскетМяч.png"
                        style={{
                          width: "250px",
                          height: "320px",
                        }}
                      />
                    )}
                    {localStorage.getItem("needTemplateMarketPL") ==
                      "pillow" && (
                      <img
                        src="./PillowTemp.png"
                        style={{
                          width: "250px",
                          height: "320px",
                        }}
                      />
                    )}
                    {localStorage.getItem("needTemplateMarketPL") == "fur" && (
                      <img
                        src="./Image-fur.png"
                        style={{
                          width: "250px",
                          height: "320px",
                        }}
                      />
                    )}
                    {localStorage.getItem("needTemplateMarketPL") ==
                      "hoodie" && (
                      <img
                        src="./hoodie.png"
                        style={{
                          width: "250px",
                          height: "320px",
                        }}
                      />
                    )}
                    {localStorage.getItem("needTemplateMarketPL") ==
                      "boots" && (
                      <img
                        src="./boots.png"
                        style={{
                          width: "250px",
                          height: "320px",
                        }}
                      />
                    )}
                    {localStorage.getItem("needTemplateMarketPL") ==
                      "toiletChild" && (
                      <img
                        src="./ToiletReady.png"
                        style={{
                          width: "250px",
                          height: "320px",
                        }}
                      />
                    )}
                  </Grid>
                  <Grid container sx={{ marginTop: "70px" }}>
                    <Grid item xs={6}>
                      {" "}
                      <Button
                        variant="contained"
                        onClick={handleClickOpenDialog}
                        sx={{
                          fontSize: "14px",
                          backgroundColor: "black",
                          "&:hover": {
                            backgroundColor: "purple",
                          },
                        }}
                      >
                        Получить рекомендации
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      <Button
                        variant="contained"
                        onClick={handleClickOpenDialog}
                        sx={{
                          fontSize: "14px",
                          backgroundColor: "grey",
                          height: "61px",
                          marginLeft: "5px",
                          "&:hover": {
                            backgroundColor: "purple",
                          },
                        }}
                      >
                        Создать проект
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}
            {localStorage.getItem("needTemplateMarketPL") &&
              localStorage.getItem("needTemplateMarketPL") == "no" && (
                <>
                  <Grid container sx={{ marginTop: "67vh" }}>
                    <Grid item xs={6}>
                      {" "}
                      <Button
                        variant="contained"
                        onClick={handleClickOpenDialog}
                        sx={{
                          fontSize: "14px",
                          backgroundColor: "black",
                          "&:hover": {
                            backgroundColor: "purple",
                          },
                        }}
                      >
                        Получить рекомендации
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      <Button
                        variant="contained"
                        onClick={handleClickOpenDialog}
                        sx={{
                          fontSize: "14px",
                          backgroundColor: "grey",
                          height: "62px",
                          marginLeft: "5px",
                          "&:hover": {
                            backgroundColor: "purple",
                          },
                        }}
                      >
                        Создать проект
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}
          </Grid>
        </Grid>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "600" }}>
          {"Убедитесь в правильности выбранных атрибутов:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography sx={{ color: "#000" }}>
              Маркетплейс: {localStorage.getItem("chosMarketPL")}
            </Typography>
            <Typography sx={{ color: "#000", marginTop: "15px" }}>
              Категория: {localStorage.getItem("category")}
            </Typography>
            <Typography sx={{ color: "#000", marginTop: "15px" }}>
              Тип фото: {localStorage.getItem("typeOfPhoto")}
            </Typography>
            <Typography sx={{ color: "#000", marginTop: "15px" }}>
              Комплект: {localStorage.getItem("complect")}
            </Typography>
            {localStorage.getItem("needTemplateMarketPL") == "no" && (
              <Typography sx={{ color: "#000", marginTop: "15px" }}>
                Шаблон: Нет
              </Typography>
            )}
            {localStorage.getItem("needTemplateMarketPL") != "no" && (
              <Typography sx={{ color: "#000", marginTop: "15px" }}>
                Шаблон: Да
              </Typography>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {localStorage.getItem("chosMarketPL") == "Ozon" &&
            localStorage.getItem("needTemplateMarketPL") == "no" && (
              <Link to="/withouttempOzon">
                {" "}
                <Button
                  autoFocus
                  onClick={createNewProject}
                  variant="contained"
                  sx={{
                    backgroundColor: "purple",
                    "&:hover": {
                      backgroundColor: "purple",
                    },
                  }}
                >
                  Все верно
                </Button>
              </Link>
            )}
          {localStorage.getItem("chosMarketPL") == "Wildberries" &&
            localStorage.getItem("needTemplateMarketPL") == "no" && (
              <Link to="/withouttempWB">
                {" "}
                <Button
                  autoFocus
                  onClick={createNewProject}
                  variant="contained"
                  sx={{
                    backgroundColor: "purple",
                    "&:hover": {
                      backgroundColor: "purple",
                    },
                  }}
                >
                  Все верно
                </Button>
              </Link>
            )}
          {localStorage.getItem("chosMarketPL") == "Yandex Market" &&
            localStorage.getItem("needTemplateMarketPL") == "no" && (
              <Link to="/withouttempYM">
                {" "}
                <Button
                  autoFocus
                  onClick={createNewProject}
                  variant="contained"
                  sx={{
                    backgroundColor: "purple",
                    "&:hover": {
                      backgroundColor: "purple",
                    },
                  }}
                >
                  Все верно
                </Button>
              </Link>
            )}

          <Button
            onClick={handleCloseDialog}
            sx={{
              color: "#fff",
              backgroundColor: "grey",
              "&:hover": {
                backgroundColor: "grey",
              },
            }}
          >
            Назад
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChooseUserAttributes;
