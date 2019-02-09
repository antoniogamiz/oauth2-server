let ObjectID = require("mongodb").ObjectID;

const Manga = require("../models/Manga");

module.exports = function(app) {
  app.get("/api/oauth/login", (req, res) => {});

  app.post("/api/oauth", (req, res) => {});
};
