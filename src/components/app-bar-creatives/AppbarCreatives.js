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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const pages = ["Мои работы", "Создать"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AppBarCreatives(props) {
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

  const CustomMenuItem = styled(MenuItem)`
    &&.Mui-selected {
      background-color: #fff;
      color: #000;npm 
    }
  `;

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
            <CustomMenuItem
              key={1}
              onClick={(event) => props.handleListItemClick(event, 1)}
              selected={props.selectedIndex === 1}
              component={Link}
              to="/createnewcreative"
            >
              <Typography textAlign="center">Мои проекты</Typography>
            </CustomMenuItem>
            <CustomMenuItem
              key={2}
              onClick={(event) => props.handleListItemClick(event, 2)}
              selected={props.selectedIndex === 2}
              sx={{ marginLeft: "100px" }}
              component={Link}
              to="/newproject"
            >
              <Typography textAlign="center">Создать</Typography>
            </CustomMenuItem>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <>
              <Tooltip title="Open settings">
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarCreatives;
