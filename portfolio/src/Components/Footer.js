import React from "react";

import { Link } from "react-router-dom";

import { IconButton, Paper, Stack, Button } from "@mui/material";
import { Box } from "@mui/system";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const IconStyle = {
  fontSize: "1.5em",
};

const IconButtonStyle = {
  height: "2em",
};

const Footer = () => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          padding: "0.5em 0",
          position: "absolute",
          width: "95%",
          bottom: "0.5em",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <Box
          sx={{
            margin: "auto",
            width: "40%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <IconButton
            href="https://github.com/harshmetkel24"
            target="_blank"
            sx={IconButtonStyle}
          >
            <GitHubIcon sx={IconStyle} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/harshkumar-metkel-9a44731b6"
            target="_blank"
            sx={IconButtonStyle}
          >
            <LinkedInIcon
              sx={{
                ...IconStyle,
                color: "#0A66C2",
              }}
            />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/harshmetkel24/"
            target="_blank"
            sx={IconButtonStyle}
          >
            <InstagramIcon
              sx={{
                ...IconStyle,
                color: "#f09433",
              }}
            />
          </IconButton>
          <IconButton
            href="https://twitter.com/harshmetkel24"
            target="_blank"
            sx={IconButtonStyle}
          >
            <TwitterIcon sx={{ ...IconStyle, color: "#00acee" }} />
          </IconButton>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ display: { xs: "flex", md: "none", color: "#fff" } }}
        >
          <Link to="/">
            <Button size="small" startIcon={<HomeIcon />}>
              Home
            </Button>
          </Link>
          <Link to="/projects">
            <Button size="small" startIcon={<AccountTreeIcon />}>
              Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="small" startIcon={<ContactMailIcon />}>
              Contact
            </Button>
          </Link>
        </Stack>
      </Paper>
    </>
  );
};

export default Footer;
