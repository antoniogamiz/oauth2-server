const mongoose = require("mongoose");
const generator = require("../../token/generator");
const Schema = mongoose.Schema;

const APIKeySchema = new Schema({
  name: String,
  prefix: String,
  hash: String,
  scope: [{ apiName: String, permissions: Array }],
  date: { type: Date, default: Date.now }
});

APIKey.statics.validKey = key => {
  this.model("APIKey").find({ hash: generator.hash(key) });
};

const APIKey = mongoose.model("APIKey", APIKeySchema);
