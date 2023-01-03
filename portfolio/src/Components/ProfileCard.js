import React from "react";

import { Box, Container } from "@mui/system";
import { Typography, Paper } from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Styles } from "./StylesObjects";

const details = [
  { key: "Name: ", value: "Harshkumar Metkel" },
  {
    key: "College: ",
    value:
      "Dhirubhai Ambani Institute of Information and Communication Technology",
  },
  { key: "Degree: ", value: "B.Tech ICT" },
  {
    key: "Course: ",
    value: "Information And Communications Technology",
  },
  { key: "Club: ", value: "Deputy Convenor DSC-DAIICT" },
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
            sx={Styles.profileCardBox}
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
                    sx={{ ...Styles.profileCardDetail, width: "20%" }}
                  >
                    {detail.key}
                  </Typography>
                  <Typography
                    sx={{
                      ...Styles.profileCardDetail,
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
