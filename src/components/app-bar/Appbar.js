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

const pages = ["Создать", "Возможности"];
const options = ["Вход", "Регистрация"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AppBarComponent() {
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
          <img
            src="./logo.jpg"
            style={{ width: "150px", height: "35px", marginRight: "5px" }}
          />
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
                      <ListItemText primary="Шаблон WB" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 1 }}>
                      <ListItemIcon>
                        <StarBorder sx={{ color: "#000" }} />
                      </ListItemIcon>
                      <ListItemText primary="Шаблон Ozon" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>
                        <StarBorder sx={{ color: "#000" }} />
                      </ListItemIcon>
                      <ListItemText primary="Шаблон YM" />
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
                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {logIn == false && (
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
                >
                  Регистрация
                </Button>
              </Box>
            )}
            {logIn == true && (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
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
