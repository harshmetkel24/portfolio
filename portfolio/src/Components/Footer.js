import React from "react";

import { IconButton, Paper } from "@mui/material";
import { Box } from "@mui/system";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const IconStyle = {
  fontSize: "1.5em",
};

const IconButtonStyle = {
  height: "2em",
};

const Footer = () => {
  return (
    <>
      <Paper elevation={0} sx={{ padding: "0.5em 0" }}>
        <Box sx={{ margin: "auto", width: "fit-content" }}>
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
                // background:
                //   "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                // WebkitBackgroundClip: "text",
                // backgroundClip: "text",
                // WebkitTextFillColor: "transparent",
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
      </Paper>
    </>
  );
};

export default Footer;
