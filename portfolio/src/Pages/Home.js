import React from "react";

import { Container } from "@mui/system";
import { Divider } from "@mui/material";

// local imports
import Navbar from "../Components/Navbar";
import ProfileCard from "../Components/ProfileCard";
import EducationTable from "../Components/EducationTable";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f5fffa",
          marginTop: "6em",
          padding: "2em 0",
        }}
      >
        <ProfileCard />
        <Divider
          variant="fullWidth"
          sx={{ borderBottomWidth: "0.1em", backgroundColor: "#111" }}
        />
        <EducationTable />
        <Divider
          variant="fullWidth"
          sx={{ borderBottomWidth: "0.1em", backgroundColor: "#111" }}
        />
      </Container>
    </>
  );
};

export default Home;
