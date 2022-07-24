import * as React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material/";

import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const pages = [
  {
    label: "Projects",
    src: "/projects",
  },
  {
    label: "Contributions",
    src: "/contributions",
  },
  {
    label: "Blog",
    src: "/blog",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
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

  return (
    <AppBar sx={{ backgroundColor: "#dcdcdc" }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { md: "flex", xs: "none" },
              color: "#008b8b",
              textDecoration: "none",
              fontFamily: "monospace",
              alignItems: "center",
              fontWeight: 700,
              letterSpacing: ".1rem",
            }}
          >
            <AccountBoxIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Link
              style={{
                display: "flex",
                color: "#008b8b",
                textDecoration: "none",
                fontFamily: "monospace",
                alignItems: "center",
                fontWeight: 700,
                letterSpacing: ".1rem",
              }}
              to="/"
            >
              harshmetkel24
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black", ml: 0 }} />
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
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Button textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "#333",
                        fontSize: "0.9em",
                        fontWeight: 550,
                      }}
                      to={page.src}
                    >
                      {page.label}
                    </Link>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            flexGrow={1}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 700,
              fontSize: "0.8em",
              color: "#008b8b",
              textDecoration: "none",
              letterSpacing: "0.08em",
              fontSize: "1.2em",
            }}
          >
            <AccountBoxIcon
              sx={{
                mr: 1,
                alignItems: "center",
                fontSize: "1.5em",
              }}
            />
            <Link
              style={{
                display: "flex",
                color: "#008b8b",
                textDecoration: "none",
                fontFamily: "monospace",
                alignItems: "center",
                fontWeight: 700,
                letterSpacing: ".1rem",
              }}
              to="/"
            >
              harshmetkel24
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: 600,
                  }}
                  to={page.src}
                >
                  {page.label}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
