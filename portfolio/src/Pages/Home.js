import React, { useEffect } from "react";

import { Container } from "@mui/system";
import { Divider } from "@mui/material";

// local imports
import Navbar from "../Components/Navbar";
import ProfileCard from "../Components/ProfileCard";
import EducationTable from "../Components/EducationTable";
import ExtraDetailsCard from "../Components/ExtraDetailsCard";
import Footer from "../Components/Footer";

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
          minHeight: "100vh",
          backgroundColor: "#080808",
          marginTop: "6em",
          marginBottom: "2em",
          padding: "1em 0",
          borderRadius: 2,
        }}
      >
        <ProfileCard />
        <Divider
          variant="fullWidth"
          sx={{ borderBottomWidth: "0.1em", backgroundColor: "#fff" }}
        />
        <EducationTable />
        <Divider
          variant="fullWidth"
          sx={{ borderBottomWidth: "0.1em", backgroundColor: "#fff" }}
        />
        <ExtraDetailsCard />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
