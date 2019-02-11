const oauthRouter = require("./oauthAPI");

module.exports = app => {
  app.use("/api/oauth", oauthRouter);
};
