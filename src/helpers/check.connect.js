"use strict";

const mongoose = require("mongoose");
const _SECOND = 5000;
const os = require("os");
const process = require("process");

//count Connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections ::${numConnection}`);
};

//check over load
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    //Example maximum number of connections based on number osf cores
    const maxConnections = numCores * 5;

    console.log(`Active connections:: ${numConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log("Connection overload dectected!");
    }
  }, _SECOND); //Monitor every 5 second
};
module.exports = {
  countConnect,
  checkOverload,
};
