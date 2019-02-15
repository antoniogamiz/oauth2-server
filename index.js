const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const boom = require("boom");
require("dotenv").config();
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

require("./src/routes")(app);

const port = process.env.PORT || 3001;

app.get("/", function(req, res) {
  res.send("Hello World!");
});

// error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
