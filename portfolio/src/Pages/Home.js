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
          >
            <Box
              className="first-box"
              sx={{
                width: {
                  md: "50%",
                  xs: "100%",
                },
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
                  fontSize: {
                    xs: "2em",
                    md: "2.5em",
                  },
                }}
              >
                Hii. I'm Harsh.
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
                I'm a full stack web developer. Mostly I work with{" "}
                <Typography sx={{ fontWeight: 600 }}>MERN-Stack.</Typography>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
                I love to design personalised websites.
              </Typography>
              <Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
                If you liked my work and want to collaborate then get in touch
                with me{" "}
                <Link to="/contact">
                  <Button
                    size="small"
                    sx={{
                      fontWeight: 800,
                      textTransform: "capitalize",
                      marginBottom: "2px",
                    }}
                  >
                    here
                  </Button>
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
