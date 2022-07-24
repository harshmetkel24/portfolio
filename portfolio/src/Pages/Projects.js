import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import Navbar from "../Components/Navbar";

const Projects = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://api.github.com/users/harshmetkel24/repos");
    setData(await res.json());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          minHeight: "100vh",
          backgroundColor: "#c9ffe5",
          marginTop: "6em",
          marginBottom: "2em",
          padding: "2em 0",
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2}>
          {data.map((elem) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={elem.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 150,
                    backgroundColor: "#dcdcdc",
                    p: 2,
                    border: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <Box display="flex" flexGrow={1}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ width: "25%", fontWeight: 600 }}
                    >
                      Ttile:
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {elem.name}
                    </Typography>
                  </Box>
                  {elem.description &&
                    (elem.description.length >= 70 ? (
                      <div data-full={elem.description}>
                        {`${String(elem.description).substr(0, 70)}...`}
                      </div>
                    ) : (
                      <div className="normal">{elem.description}</div>
                    ))}
                  <Box display="flex" flexGrow={1}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ width: "25%", fontWeight: 600 }}
                    >
                      Language:
                    </Typography>
                    <Typography variant="body2" gutterBottom>
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
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: "capitalize",
                      }}
                      startIcon={<GitHubIcon />}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "#222" }}
                        to={elem.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </Link>
                    </Button>
                    {elem.homepage && (
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          textTransform: "capitalize",
                        }}
                        startIcon={<GitHubIcon />}
                      >
                        <Link
                          style={{ textDecoration: "none", color: "#222" }}
                          to={elem.homepage}
                          target="_blank"
                        >
                          Live Project
                        </Link>
                      </Button>
                    )}
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
