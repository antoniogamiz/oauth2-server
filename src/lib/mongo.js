const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}/?authSource=${DB_NAME}`; // prettier-ignore

class MongoLib {
  // init client
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      poolSize: 10
    });
    this.dbName = DB_NAME;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect(error => {
        if (error) {
          reject(error);
        }
        console.log("Connected succesfully to mongo");
        resolve(this.client.db(this.dbName));
      });
    });
  }

  async addUser(collection, { username, password }) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .insertOne({
          username,
          password,
          date: Date.now()
        })
        .then(result => {
          return result.insertedId;
        });
    });
  }

  async getUser(collection, username) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find({ username })
        .toArray();
    });
  }
}

let c = new MongoLib();

c.getUser("users", "pepito").then(result => console.log(result));
c.getUser("users", "pepito").then(result => console.log(result));

module.exports = MongoLib;
