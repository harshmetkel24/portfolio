import React from "react";

import { Paper, Box, Typography, T } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GitHubIcon from "@mui/icons-material/GitHub";

const ExtraDetailsCard = () => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          backgroundColor: "#080808",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              md: "50%",
              xs: "inherit",
            },
            backgroundColor: "#343434",
            borderRadius: 1,
            m: 3,
            p: 1,
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontFamily: "inherit",
              fontWeight: 600,
              display: "flex",
              alighItems: "center",
              fontSize: "1.5em",
            }}
          >
            <CodeIcon sx={{ fontSize: "1.5em", mx: 1, color: "#48d1cc" }} />
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
            <HtmlIcon sx={{ fontSize: "3em", color: "#48d1cc", mx: 1 }} />
            <CssIcon sx={{ fontSize: "3em", color: "#48d1cc", mx: 1 }} />
            <JavascriptIcon sx={{ fontSize: "3em", color: "#48d1cc", mx: 1 }} />
            <GitHubIcon
              sx={{ fontSize: "1.5em", color: "#48d1cc", mx: 1, my: "auto" }}
            />
            <img
              style={{ height: "1.5em", fill: "#fff", margin: "auto 0.5em" }}
              src="/images/ReactJSIcon.svg"
              alt="ReactJS"
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
            />{" "}
            <img
              style={{ height: "1.3em", fill: "#fff", margin: "auto 0.5em" }}
              src="/images/bootstrap.svg"
            />
          </Typography>
          <Typography
            sx={{
              mx: 1,
              color: "#c0c0c0",
              fontFamily: "inherit",
            }}
          >
            Problem Solving
          </Typography>
          <Typography
            sx={{
              mx: 1,
              color: "#c0c0c0",
              fontFamily: "inherit",
            }}
          >
            Interpersonal Communications
          </Typography>
          <Typography
            sx={{
              mx: 1,
              color: "#c0c0c0",
              fontFamily: "inherit",
            }}
          >
            Good at working in team
          </Typography>
        </Box>
        <Box
          sx={{
            displah: "flex",
            flexDirection: "column",
            width: {
              md: "50%",
              xs: "inherit",
            },
          }}
        >
          <Box sx={{ backgroundColor: "#343434", borderRadius: 1, p: 1, m: 3 }}>
            <Typography
              component="h3"
              sx={{
                fontFamily: "inherit",
                fontWeight: 600,
                display: "flex",
                alighItems: "center",
                fontSize: "1.5em",
              }}
            >
              <EmojiEventsIcon
                sx={{ fontSize: "1.5em", mx: 1, color: "#48d1cc" }}
              />
              Achievements
            </Typography>
            <Typography
              sx={{
                mx: 1,
                color: "#c0c0c0",
                fontFamily: "inherit",
              }}
            >
              Runners up in{" "}
              <span style={{ color: "#48d1cc" }}>Winter Of Code 2020-21</span>
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "#343434", borderRadius: 1, p: 1, m: 3 }}>
            <Typography
              component="h3"
              sx={{
                fontFamily: "inherit",
                fontWeight: 600,
                display: "flex",
                alighItems: "center",
                fontSize: "1.5em",
              }}
            >
              <FitnessCenterIcon
                sx={{ fontSize: "1.5em", mx: 1, color: "#48d1cc" }}
              />
              Hobbies
            </Typography>
            <Typography
              sx={{
                mx: 1,
                color: "#c0c0c0",
                fontFamily: "inherit",
              }}
            >
              Working Out in Gym
            </Typography>
            <Typography
              sx={{
                mx: 1,
                color: "#c0c0c0",
                fontFamily: "inherit",
              }}
            >
              Playing Flute
            </Typography>
            <Typography
              sx={{
                mx: 1,
                color: "#c0c0c0",
                fontFamily: "inherit",
              }}
            >
              Travelling
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ExtraDetailsCard;
