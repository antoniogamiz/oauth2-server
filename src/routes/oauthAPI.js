const express = require("express");
const jwt = require("../token/jwt/middleware");
const db = require("../database");
let ObjectID = require("mongodb").ObjectID;

let router = express.Router();

router.get("/register", (req, res) => {
  const { username, password } = req.body;
  db.registerNewUser(username, password).then(err =>
    res.status(200).json({ err: err })
  );
});

router.get("/login", (req, res) => {
  const { username, password } = req.body;
  let v = db.validateUser(username, password, match => {
    if (match)
      res.status(200).json({
        message: "Authentication succesful!",
        token: "oweijfeiojfio"
      });
    else {
      res.status(403).json({
        message: "Incorrect Credentials"
      });
    }
  });
});

module.exports = router;
