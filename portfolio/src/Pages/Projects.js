import React, { useState, useEffect } from "react";

import { Container, Grid } from "@mui/material";

import Navbar from "../Components/Navbar";
// import ScrollToTopButton from "../Components/ScrollToTopButton";
import Footer from "../Components/Footer";
import ProjectsCard from "../Components/ProjectsCard";

const Projects = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://api.github.com/users/harshmetkel24/repos");
    setData(await res.json());
  };
  useEffect(() => {
    document.title = "Projects | harshmetkel24";
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
          marginBottom: {
            sm: "6em",
            xs: "8em",
          },
          padding: "2em 0",
          borderRadius: 2,
          width: {
            xs: "90vw",
          },
        }}
      >
        <Grid container spacing={1}>
          {data.map((elem) => {
            return <ProjectsCard elem={elem} />;
          })}
        </Grid>
      </Container>
      {/* <ScrollToTopButton /> */}
      <Footer />
    </>
  );
};

export default Projects;
