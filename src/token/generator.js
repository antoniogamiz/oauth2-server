const crypto = require("crypto");

const hash = data => {
  return crypto
    .createHash("sha256")
    .update(data)
    .digest("hex");
};

const gen = l => crypto.randomBytes(l).toString("hex");

const key = (prefix, l = 128) => {
  const random = gen(l);
  return {
    prefix: prefix,
    key: prefix + "." + random,
    hash: hash(random)
  };
};

module.export = {
  key: key,
  hash: hash
};

console.log(key("google"));
