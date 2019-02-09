const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  })
  .then(console.log("Connected to MongoDB..."));

const port = process.env.SERVER_PORT || 3001;

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
