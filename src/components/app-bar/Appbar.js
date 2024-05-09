import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";

const pages = ["Создать", "Возможности"];
const options = ["Вход", "Регистрация"];
const settings = ["Аккаунт", "Выйти"];

function AppBarComponent({ isLog, setLog, authResult }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = () => {
    localStorage.setItem("isLog", "false");
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [openn, setOpenn] = React.useState(false);

  const handleClickn = () => {
    setOpenn(!openn);
  };

  const logIn = false;

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{ backgroundColor: "#000" }}>
        <Toolbar disableGutters>
          <Link to="/">
            <img
              src="./logo.jpg"
              style={{ width: "150px", height: "35px", marginRight: "5px" }}
            />
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <>
              <List>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Создать" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                      <ListItemIcon>
                        <StarBorder sx={{ color: "#000" }} />
                      </ListItemIcon>
                      <Link
                        to="/newproject"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        {" "}
                        <ListItemText primary="Шаблон WB" />
                      </Link>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 1 }}>
                      <ListItemIcon>
                        <StarBorder sx={{ color: "#000" }} />
                      </ListItemIcon>
                      <Link
                        to="/newproject"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        <ListItemText primary="Шаблон Ozon" />
                      </Link>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>
                        <StarBorder sx={{ color: "#000" }} />
                      </ListItemIcon>
                      <Link
                        to="/newproject"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        <ListItemText primary="Шаблон YM" />
                      </Link>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </>

            <>
              <List sx={{ marginLeft: "60px" }}>
                <ListItemButton onClick={handleClickn}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Возможности" />
                  {openn ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openn} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemIcon>
                        <StarBorder sx={{ color: "#000" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Инфографика для Ozon"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemIcon>
                        <StarBorder sx={{ color: "#000" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Инфографика для Wildberries"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemIcon>
                        <StarBorder sx={{ color: "#000" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Инфографика для Yandex Market"
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {localStorage.getItem("isLog") === "false" && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", justifyContent: "center" },
                }}
              >
                <Button
                  key={1}
                  onClick={handleCloseNavMenu}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    marginRight: "40px",
                    fontWeight: "600",
                  }}
                  href="/login"
                >
                  Вход
                </Button>
                <Button
                  key={2}
                  onClick={handleCloseNavMenu}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",

                    backgroundColor: "purple",
                  }}
                  href="/register"
                >
                  Регистрация
                </Button>
              </Box>
            )}

            {localStorage.getItem("isLog") === "true" && (
              <>
                <Tooltip title="Опции">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={localStorage.getItem("nameOfUser")}
                      src="/static/images/avatar/2.jpg"
                    ></Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={1} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Аккаунт</Typography>
                  </MenuItem>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#000000DE" }}
                  >
                    <MenuItem
                      key={2}
                      onClick={() => {
                        handleCloseUserMenu();
                        logOut();
                      }}
                    >
                      <Typography textAlign="center">Выйти</Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarComponent;
