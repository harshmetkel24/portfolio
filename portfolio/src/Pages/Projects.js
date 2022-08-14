import React, { useState, useEffect, createContext } from "react";

import { Container, Grid, Box } from "@mui/material";

import Navbar from "../Components/Navbar";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import Footer from "../Components/Footer";
import ProjectsCard from "../Components/ProjectsCard";
import LanguageFilters from "../Components/LanguageFilters";

const DataContext = createContext();

const Projects = () => {
  // modifiable data throughout
  const [data, setData] = useState([]);
  // all projects data
  const [allProjectsData, setAllProjectsData] = useState([]);
  const getData = () => {
    fetch(`https://api.github.com/users/harshmetkel24/repos`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setAllProjectsData(res);
      });
  };
  useEffect(() => {
    document.title = "Projects | harshmetkel24";
    getData();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ data, setData, allProjectsData }}>
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
            padding: "2em 0",
            borderRadius: 2,
            width: {
              xs: "90vw",
            },
          }}
        >
          <LanguageFilters />
          <Grid container spacing={1}>
            {data.map((elem) => {
              return <ProjectsCard elem={elem} />;
            })}
          </Grid>
        </Container>
        <ScrollToTopButton />
        <Footer />
      </DataContext.Provider>
    </>
  );
};

export { Projects, DataContext };
