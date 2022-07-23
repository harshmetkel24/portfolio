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
            fontSize: { md: "1.8em", xs: "1.5em" },
          }}
          m={1}
        >
          Personal Details
        </Typography>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <Box
            mt={1}
            mb={1}
            sx={{
              width: {
                md: "30%",
                xs: "100%",
              },
              background: "url(/images/profile-img.png)",
              backgroundSize: {
                md: "cover",
                xs: "contain",
              },
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              height: {
                md: "300px",
                xs: "180px",
              },
              border: {
                md: "1px solid black",
                xs: "none",
              },
              borderRight: {
                md: "none",
                xs: "none",
              },
            }}
          ></Box>

          <Box
            mt={1}
            mb={1}
            sx={{
              width: {
                md: "70%",
                xs: "100%",
              },
              backgroundColor: "#dcdcdc",
              height: { md: "300px", xs: "fit-content" },
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: { md: 0, xs: 4 },
              borderBottomLeftRadius: { md: 0, xs: 4 },
              border: "1px solid black",
              borderLeft: {
                md: "none",
                xs: "1px solid black",
              },
            }}
          >
            {details.map((detail) => {
              return (
                <Box
                  m={1}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      sm: "row",
                      xs: "column",
                    },
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        md: "1.2em",
                        xs: "1em",
                      },
                      width: "20%",
                    }}
                  >
                    {detail.key}
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontWeight: 550,
                      fontSize: {
                        md: "1.2em",
                        xs: "1em",
                      },
                      width: "80%",
                    }}
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
