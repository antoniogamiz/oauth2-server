const User = require("./models/UserModel.js");

const registerNewUser = async (username, password) => {
  let user = new User({ username: username, password: password });
  user.save(err => {
    if (err) console.log(err);
  });
};

const validateUser = (username, password, cb) => {
  User.find({ username: username }, (err, docs) => {
    if (err) console.log(err);
    docs[0].validatePassword(password, match => cb(match));
  });
};

module.exports = {
  registerNewUser: registerNewUser,
  validateUser: validateUser
};
