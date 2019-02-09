const crypto = require("crypto");

const hash = crypto.createHash("sha256");

const random = l => crypto.randomBytes(l).toString("hex");

const key = (prefix, l = 128) => {
  return {
    prefix: prefix,
    key: prefix + "." + random(l),
    hash: hash.update("some data to hash").digest("hex")
  };
};

module.export = {
  key: key
};
