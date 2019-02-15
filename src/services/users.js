const MongoLib = require("../lib/mongo");

class UsersService {
  constructor() {
    this.collection = "users";
    this.db = new MongoLib();
  }

  async createUser({ username, password }) {
    let user = await this.db.getUser(this.collection, username);
    if (user.length) {
      return new Error("User already exists");
    }

    let userId = await this.db.addUser(this.collection, { username, password });
    return userId;
  }
}
