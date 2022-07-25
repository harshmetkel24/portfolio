import * as React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles/";

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

const pages = [
  {
    label: "Projects",
    src: "/projects",
  },
  {
    label: "My Contributions",
    src: "/contributions",
  },
  {
    label: "Contact Me",
    src: "/contact",
  },
];

const useStyles = makeStyles((theme) => ({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#444",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
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
    <AppBar sx={{ backgroundColor: "#222" }} position="fixed">
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
            <Link
              style={{
                display: "flex",
                color: "whitesmoke",
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

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "whitesmoke", ml: 0 }} />
            </IconButton>
            <Menu
              className={classes.menu}
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
                  <Button sx={{ width: "100%" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "whitesmoke",
                        fontSize: "0.8em",
                        fontWeight: 600,
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
            <Link
              style={{
                color: "whitesmoke",
                textDecoration: "none",
                fontFamily: "monospace",
                alignItems: "center",
                fontWeight: 700,
                letterSpacing: ".15rem",
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
                sx={{
                  my: 2,
                  mx: 1,
                  color: "black",
                  display: "block",
                  color: "#fff",
                  borderRadius: 2,
                  transition: "all 0.25s ease",
                  fontWeight: 800,
                  "& a": {
                    color: "#fff",
                  },
                  "&:hover a": {
                    color: "#333",
                  },
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#e0ffff",
                    boxShadow: "inset 0px 1px 16px 2px #00ffef",
                  },
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    fontWeight: 700,
                    transition: "all 0.5s ease",
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
