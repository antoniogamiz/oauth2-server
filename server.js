const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on port ${process.env.SERVER_PORT}`);
});
