"use strict";
const mongoose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");

const {
  db: { host, name, port },
} = require("../configs/config.mongdb");

// const connectString = `mongodb://localhost:27017/shopDEV`;
const connectString = `mongodb://${host}:${port}/${name}`;
//console.log(connectString);
// const connectString = `mongodb+srv://thaisondev:thaison91@cluster0.b689s5c.mongodb.net/?retryWrites=true&w=majority`;

class Database {
  constructor() {
    this.connect();
  }
  //connect;
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then((_) => console.log(`Connected Mongodb Success PRO`, countConnect()))
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
