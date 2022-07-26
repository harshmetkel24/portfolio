import React, { useState, useEffect } from "react";

import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import Navbar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
  allText: {
    fontWeight: "600 !important",
    color: "#fff",
    fontFamily: "inherit !important",
    fontSize: "1em !important",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://api.github.com/users/harshmetkel24/repos");
    setData(await res.json());
  };
  useEffect(() => {
    document.title = "Project | harshmetkel24";
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          minHeight: "100vh",
          backgroundColor: "#080808",
          marginTop: "6em",
          marginBottom: "2em",
          padding: "2em 0",
          borderRadius: 2,
          width: {
            xs: "90vw",
          },
        }}
      >
        <Grid container spacing={1}>
          {/* prject cards */}
          {data.map((elem) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={elem.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: {
                      sm: 150,
                      xs: "fit-content",
                    },
                    m: 2,
                    backgroundColor: "#004242",
                    p: 2,
                    borderRadius: 2,
                    transition: ".5s ease-in-out",
                    "&:hover": {
                      boxShadow: "inset 0px 2px 8px 1px #007fff",
                      transform: "scale(1.05)",
                      backgroundColor: "#002147",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      flexDirection: { sm: "row", xs: "column" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      gutterBottom
                      className={classes.allText}
                    >
                      {elem.name}
                    </Typography>
                  </Box>
                  {elem.description &&
                    (elem.description.length >= 50 ? (
                      <div
                        // className={classes.allText}
                        data-full={elem.description}
                      >
                        {`${String(elem.description).substr(0, 50)}...`}
                      </div>
                    ) : (
                      <div className="normal">{elem.description}</div>
                    ))}
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      flexDirection: { sm: "row", xs: "column" },
                    }}
                  >
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ width: "25%" }}
                      className={classes.allText}
                    >
                      Language:
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      className={classes.allText}
                    >
                      {elem.language}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      justifyContent: "space-between ",
                    }}
                  >
                    <Button
                      component="a"
                      href={elem.html_url}
                      target="_blank"
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: "capitalize",
                      }}
                      startIcon={<GitHubIcon />}
                    >
                      Github
                    </Button>
                    {elem.homepage && (
                      <Button
                        href={
                          String(elem.homepage).substr(0, 5) === "https"
                            ? elem.homepage
                            : "https://" + elem.homepage
                        }
                        target="_blank"
                        variant="contained"
                        size="small"
                        sx={{
                          textTransform: "capitalize",
                        }}
                        startIcon={<LiveTvIcon />}
                      >
                        Live Project
                      </Button>
                    )}
                    {console.log(elem.homepage)}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
