const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: String,
  password: String,
  date: { type: Date, default: Date.now }
});

UserSchema.pre("save", function(next) {
  let user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.validatePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, res) => {
    if (err) console.log(err);
    cb(res);
  });
};

module.exports = mongoose.model("User", UserSchema);
