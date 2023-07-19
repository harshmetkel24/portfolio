import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { Paper, Stack, Typography, Button } from "@mui/material";
import { Container, Box } from "@mui/system";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  useEffect(() => {
    document.title = "Home | harshmetkel24";
  }, []);

  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          minHeight: "70vh",
          marginTop: "6em",
          marginBottom: {
            sm: "6em",
            xs: "8em",
          },
          display: "flex",
          alignItems: "center",
          padding: "1em 0",
        }}
      >
        <Paper
          elevation={3}
          borderRadius={3}
          sx={{
            borderRadius: 2,
            padding: "1em",
            backgroundColor: "#fff",
            transition: "all 1s ease-in-out",
            "&:hover": {
              backgroundColor: "#242424",
            },
            "&:hover .first-box": {
              backgroundColor: "#f0f8ff",
              boxShadow: "none",
              color: "#000",
              scale: "0.9",
            },
            "&:hover button": {
              color: "#333",
            },
          }}
        >
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            spacing={3}
            justifyContent={"space-between"}
            sx={{
              height: {
                lg: "400px",
                sm: "100%",
              },
              fontFamily: "'Pacifico', cursive",
              letterSpacing: "4px",
            }}
          >
            <Box
              className="first-box"
              sx={{
                width: {
                  md: "50%",
                  xs: "100%",
                },
                fontFamily: "inherit",
                letterSpacing: "4px",
                boxSizing: "border-box",
                backgroundColor: "#343434",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2em 3em",
                boxShadow: "inset 0 0 6px #fff",
                borderRadius: 2,
                transition: "all 1s ease-in-out",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "inherit",
                  letterSpacing: "4px",
                  fontSize: {
                    xs: "1.5em",
                    md: "2em",
                  },
                }}
              >
                Hello, I'm Harsh!
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#b666d2",
                  fontFamily: "inherit",
                  letterSpacing: "4px",
                  fontSize: {
                    xs: "1em",
                    sm: "0.8em",
                    md: "1em",
                  },
                }}
              >
                A passionate Full Stack Web and React Native Developer with a
                strong affinity for the MERN stack
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "inherit",
                  letterSpacing: "4px",
                  color: "#d473d4",
                }}
              >
                Crafting personalized websites is not just my profession; it's
                my passion.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#c154c1",
                  fontFamily: "inherit",
                  letterSpacing: "4px",
                }}
              >
                Reach out to collaborate or connect with me{" "}
                <Link
                  to="/contact"
                  style={{
                    color: "#ff1dce",
                    fontFamily: "inherit",
                    textDecoration: "none",
                  }}
                >
                  here!
                </Link>
              </Typography>
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
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#383838",
                },
              }}
            >
              <Box
                component="img"
                src="/images/profile-img.png"
                sx={{
                  width: "100%",
                  transition: "all 0.4s ease-in-out",
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
