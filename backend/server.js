const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const data = require("./data.js");
const dotenv = require("dotenv");
const Video = require("./dbModel.js");
const userData = require("./userInfo.js");

dotenv.config();
// app config
const app = express();

const port = 9000;

// middlewares

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

app.use(require("./routes/auth.js"));

// DB config

const connection_url = process.env.MONGO_URL;

mongoose.connect(connection_url);

// api endpoints

app.get("/", (req, res) => res.status(200).send("Hello, world!"));

app.get("/v1/posts/", (req, res) => res.status(200).send(data));

// TO FUCK AROUND DATA IN MONGO

// To get Data from Mongo
app.get("/v2/posts", (req, res) => {
  // in the curly bracket we can add filter to retrieve the data
  Video.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// To send data to Mongo
app.post("/v2/posts/", (req, res) => {
  // This post request is to add data into the database
  // It will let us add a video to the collection

  const dbVideos = req.body;

  Video.create(dbVideos)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

// Login Registration

// Endpoint for handling user registration

app.get("/register", (req, res) => {
  userData
    .find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post("/register", (req, res) => {
  // Assuming your registration form fields are username, email, and password
  const newUser = req.body;

  // Save the user to the database
  userData
    .create(newUser)
    .then(() => {
      res.status(201).send("User registered successfully!");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// listen

app.listen(port, () => console.log("listening on port:" + port));
