import React from "react";

import { Link } from "react-router-dom";

import { Paper, Stack, Typography, Button } from "@mui/material";
import { Container, Box } from "@mui/system";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          backgroundColor: "#080808",
          marginTop: "6em",
          marginBottom: {
            sm: "6em",
            xs: "8em",
          },
          padding: "1em 0",
          borderRadius: 2,
        }}
      >
        <Paper elevation={3} borderRadius={3}>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            spacing={3}
            sx={{ justifyContent: "space-between" }}
          >
            <Box
              sx={{
                width: {
                  md: "50%",
                  xs: "100%",
                  boxSizing: "border-box",
                  backgroundColor: "#f2f2f2",
                  color: "#000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "2em 3em",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "inherit",
                  fontSize: {
                    xs: "2em",
                    md: "2.5em",
                  },
                }}
              >
                Hi. I,m Harsh.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "inherit",
                  fontSize: {
                    xs: "1em",
                    sm: "0.8em",
                    md: "1.2em",
                  },
                }}
              >
                I'm a full stack web developer. Mostly I work with MERN-stack.
                Have a look over my projects.
              </Typography>
              <Link to="/projects">
                <Button size="small" variant="contained">
                  Projects
                </Button>
              </Link>
              <Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
                Visit my full profile here.
              </Typography>
              <Link to="/details">
                <Button size="small" variant="contained">
                  Projects
                </Button>
              </Link>
              <Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
                If liking my work, then do contact me👋🏽
              </Typography>
              <Link to="/projects">
                <Button size="small" variant="contained">
                  Contact me
                </Button>
              </Link>
            </Box>
            <Box
              sx={{
                width: {
                  md: "50%",
                  xs: "100%",
                },
                background: "#343434",
                objectFit: "cover",
                fontFamily: "inherit",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  backgroundColor: "#383838",
                },
                "&:hover img": {
                  scale: "1.1",
                },
              }}
            >
              <Box
                component="img"
                src="/images/profile-img.png"
                sx={{
                  width: "100%",
                  transition: "all 0.4s ease",
                }}
              ></Box>
            </Box>
          </Stack>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
