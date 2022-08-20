import React from "react";

import { Paper, Box, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Styles } from "./StylesObjects";

const ExtraDetailsCard = () => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: {
            sm: "row",
            xs: "column",
          },
          backgroundColor: "#080808",
          justifyContent: "center",
        }}
      >
        <Box sx={Styles.boxStyles}>
          <Typography component="h3" sx={Styles.headingText}>
            <CodeIcon sx={Styles.headingIcon} />
            Skills
          </Typography>
          <Typography sx={{ color: "#c0c0c0", mx: 1, fontFamily: "inherit" }}>
            Technologies I work with:
          </Typography>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "1em",
              display: "flex",
              alighItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{ height: "1.5em", fill: "#fff", margin: "auto 0.5em" }}
              src="/images/ReactJSIcon.svg"
              alt="ReactJS"
            />
            <HtmlIcon sx={{ fontSize: "3em", color: "#48d1cc", mx: 1 }} />
            <CssIcon sx={{ fontSize: "3em", color: "#48d1cc", mx: 1 }} />
            <JavascriptIcon sx={{ fontSize: "3em", color: "#48d1cc", mx: 1 }} />
            <img
              style={{ height: "1.5em", fill: "#fff", margin: "auto 0.5em" }}
              src="/images/reactNative.svg"
              alt="ReactNative"
            />
            <img
              src="/images/NodeJSIcon.svg"
              style={{
                height: "3em",
                margin: "0 0.3em",
              }}
              alt="NodeJS"
            />
            <img
              style={{ height: "1.5em", margin: "auto 0.5em" }}
              src="/images/MongodbIcon.svg"
              alt="MongoDB"
            />
            <GitHubIcon
              sx={{ fontSize: "1.5em", color: "#48d1cc", mx: 1, my: "auto" }}
            />
            <img
              style={{ height: "1.3em", fill: "#fff", margin: "auto 0.5em" }}
              src="/images/bootstrap.svg"
            />
          </Typography>
          <Typography sx={Styles.rowText}>Problem Solving</Typography>
          <Typography sx={Styles.rowText}>
            Interpersonal Communications
          </Typography>
          <Typography sx={Styles.rowText}>Good at working in team</Typography>
        </Box>
        <Box sx={Styles.boxStyles}>
          <Box sx={{ p: 1 }}>
            <Typography component="h3" sx={Styles.headingText}>
              <EmojiEventsIcon sx={Styles.headingIcon} />
              Achievements
            </Typography>
            <Typography sx={Styles.rowText}>
              Runners up in{" "}
              <span style={{ color: "#48d1cc" }}>Winter Of Code 2020-21</span>
            </Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography component="h3" sx={Styles.headingText}>
              <FitnessCenterIcon sx={Styles.headingIcon} />
              Hobbies
            </Typography>
            <Typography sx={Styles.rowText}>Working Out in Gym</Typography>
            <Typography sx={Styles.rowText}>Playing Flute</Typography>
            <Typography sx={Styles.rowText}>Travelling</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ExtraDetailsCard;
