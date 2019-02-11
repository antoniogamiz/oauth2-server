let jwt = require("jsonwebtoken");
require("dotenv").config();

const checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (token) {
    if (token.startsWith("Bearer: ")) {
      token = token.slice(7, token.length);
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Token required." });
  }
};

const login = (req, res) => {
  const { username, password } = req.body;

  let u = "user";
  let p = "user";

  if (username && password) {
    if (username === u && password === p) {
      let token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
        expiresIn: "24h"
      });
      res.status(200).json({
        token: token
      });
    }
  } else {
    res.status(400).json({
      message: "Credentials invalid"
    });
  }
};

module.exports = {
  checkToken: checkToken,
  login: login
};
