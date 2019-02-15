const Joi = require("joi");

const userSchema = {
  name: Joi.string()
    .max(50)
    .required(),
  password: Joi.string().required(),
  tags: userTagSchema
};

module.exports = {
  userSchema
};
