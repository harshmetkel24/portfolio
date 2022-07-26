const { prototype } = require("events");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const port = 4000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL, // my email address
    pass: process.env.WORD, // my email password
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`=== Server is ready to take messages: ${success} ===`);
  }
});

app.post("/send", (req, res) => {
  const mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.name}`,
    text: `${req.body.mailerState.message}`,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      res.json({ status: "failure" });
    } else {
      console.log("Email sent successfully🥳");
      res.json({ status: "success" });
    }
  });
});

app.listen(port, () => {
  console.log(`The server is listening on PORT: ${port}`);
});
