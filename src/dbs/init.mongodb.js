"use strict";

const {
  db: { host, name, port },
} = require("../configs/config.mongdb");
const mongoose = require("mongoose");
// const connectString = `mongodb://localhost:27017/shopDEV`;
const connectString = `mongodb://${host}:${port}/${name}`;

// const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;

// // Connect MongoDB at default port 27017.
// mongoose.connect(
//   "mongodb://localhost:27017/DB Name",
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//   },
//   (err) => {
//     if (!err) {
//       console.log("MongoDB Connection Succeeded.");
//     } else {
//       console.log("Error in DB connection: " + err);
//     }
//   }
// );

// const connectString = `mongodb+srv://thaisondev:thaison91@cluster0.b689s5c.mongodb.net/?retryWrites=true&w=majority`;
const { countConnect } = require("../helpers/check.connect");

class Database {
  constructor() {
    this.connect();
  }
  //connect
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
