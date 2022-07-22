import React from "react";

import { Box, Container } from "@mui/system";
import { Typography, Paper } from "@mui/material";

const details = [
  { key: "Name: ", value: "Harshkumar Metkel" },
  {
    key: "College: ",
    value:
      "Dhirubhai Ambani Institute of Information and Communication Technology",
  },
  { key: "Degree: ", value: "Bachelors in Technology" },
  {
    key: "Course: ",
    value: "Information And Communications Technology",
  },
  { key: "Languages: ", value: "English, Hindi, Gujarati, Telugu" },
  { key: "Mobile: ", value: "8128662202" },
  {
    key: "Email: ",
    value: "harshmetkel24@gmail.com",
  },
];

const ProfileCard = () => {
  return (
    <>
      <Paper sx={{ padding: "1em", marginBottom: "2em" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#008b8b",
            fontWeight: 600,
            textDecoration: "underline",
          }}
          m={1}
        >
          Personal Details
        </Typography>
        <Container maxWidth="lg" sx={{ display: "flex" }}>
          <Box
            p={2}
            sx={{
              width: "30%",
              background: "url(../images/profile-pic.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "300px",
            }}
          ></Box>

          <Box
            p={2}
            sx={{
              width: "70%",
              backgroundColor: "#dcdcdc",
              height: "300px",
              borderRadius: 2,
              border: "1px solid #000",
            }}
          >
            {details.map((detail) => {
              return (
                <Box m={1} sx={{ display: "flex", flexGrow: 1 }}>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "1.2em", width: "20%" }}
                  >
                    {detail.key}
                  </Typography>{" "}
                  <Typography
                    sx={{ fontWeight: 550, fontSize: "1.2em", width: "80%" }}
                  >
                    {detail.value}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default ProfileCard;
