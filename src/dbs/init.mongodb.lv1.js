const mongoose = require("mongoose");
const {
  db: { host, name, port },
} = require("../configs/config.mongdb");

const connectString = `mongodb://${host}:${port}/${name}`;
console.log(connectString);
class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(connectString)
      .then((_) => console.log(`Connected Mongodb success`))
      .catch((err) => console.log(`Error Connect!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
