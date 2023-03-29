"use strict";

const mongoose = require("mongoose");

// const connectString = `mongodb://localhost:27017/shopDEV`;
const connectString = `mongodb+srv://thaisondev:thaison91@cluster0.b689s5c.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(connectString)
  .then((_) => console.log(`Connected Mongodb Success`))
  .catch((err) => console.log(`Error Connect`));

//dev
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;
