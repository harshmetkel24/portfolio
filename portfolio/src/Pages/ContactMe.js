import React from "react";
import Navbar from "../Components/Navbar";

import { Container, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

import SendIcon from "@mui/icons-material/Send";

// importing typerwriter-effect package to display typing effect
import TypeWriter from "typewriter-effect";
// importing GraphemeSplitter to split emojis as seperate individual characters
import GraphemeSplitter from "grapheme-splitter";

const list = [
  "🙋🏽‍♂️ this is harshmetkel24",
  "I ❤ to design Websites",
  "Like My Work?",
  "Then do Contact Me👋🏽",
];

const ContactMe = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={"lg"}
        sx={{
          minHeight: "80vh",
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
        <Box
          className="typewriter"
          sx={{
            width: "fit-content",
            margin: "0 auto",
            fontSize: {
              md: "3em",
              sm: "2em",
              xs: "1.5em",
            },
            mb: 4,
            color: "#fff",
            animation: "text 6s infinite",
          }}
        >
          <TypeWriter
            options={{
              strings: list,
              autoStart: true,
              loop: true,
              pauseFor: "1500",
              stringSplitter: (str) => {
                const splitter = new GraphemeSplitter();
                return splitter.splitGraphemes(str);
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: "70%",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-around",
            margin: "auto",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              id="outlined-multiline-static"
              label="Name"
              rows={10}
              placeholder="Please Enter your Name..."
              variant="filled"
              color="success"
              fullWidth
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
              placeholder="Please Enter your message here..."
              variant="filled"
              color="success"
              fullWidth
            />
          </Box>
          <Button
            color="success"
            variant="contained"
            sx={{ my: 2 }}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ContactMe;
