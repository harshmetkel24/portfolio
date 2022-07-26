const { prototype } = require("events");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

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
    text: `${req.body.mailerState.message}
      
      Can revert back to me at: ${req.body.mailerState.email}`,
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

if (process.env.NODE_ENV === "production") {
  const path = require("path");

  app.get("/", function (req, res) {
    app.use(express.static(path.resolve(__dirname, "portfolio", "build")));
    res.sendFile(path.resolve(__dirname, "portfolio", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`The server is listening on PORT: ${port}`);
});
