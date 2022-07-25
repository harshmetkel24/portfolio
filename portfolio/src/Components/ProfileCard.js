import React from "react";

import { Box, Container } from "@mui/system";
import { Typography, Paper } from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";

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
      <Paper sx={{ padding: "0.5em", backgroundColor: "#080808" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "whitesmoke",
            fontWeight: 700,
            fontSize: { md: "2em", xs: "1.5em" },
            mb: 1,
            fontFamily: "inherit",
          }}
        >
          <AccountBoxIcon sx={{ mx: 1, color: "#48d1cc" }} />
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
            component="img"
            src="/images/profile-img.png"
            sx={{
              mb: 1,
              width: {
                md: "30%",
                xs: "100%",
              },
              background: "#343434",
              objectFit: "cover",
              fontFamily: "inherit",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              borderTopRightRadius: {
                md: 0,
                xs: 4,
              },
              borderBottomRightRadius: {
                md: 0,
                xs: 4,
              },
              height: {
                md: "320px",
                xs: "fit-content",
              },
            }}
          ></Box>

          <Box
            sx={{
              px: {
                md: 2,
                xs: 0,
              },
              width: {
                md: "70%",
                xs: "100%",
              },
              backgroundColor: "#1b1b1b",
              height: { md: "320px", xs: "fit-content" },
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius: { md: 0, xs: 4 },
              borderBottomLeftRadius: { md: 0, xs: 4 },
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
                        md: "1.3em",
                        xs: "1.1em",
                      },
                      width: "20%",
                      color: "whitesmoke",
                      fontFamily: "inherit",
                    }}
                  >
                    {detail.key}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "white",
                      fontSize: {
                        md: "1.3em",
                        xs: "1.1em",
                      },
                      width: "80%",
                      fontFamily: "inherit",
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
