require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
// const { compile } = require("morgan");
const app = express();
const compression = require("compression");

// console.log(`Process::`, process.env);
//init middlewares
app.use(morgan("dev")); //dau ra ngan gon, trang thai code duoc to mau
// app.use(morgan("combined")); //theo tc apache Jappan
// app.use(morgan("common"));
// app.use(morgan("short"));
// app.use(morgan("tiny"));
app.use(helmet()); //hacker tham do, xem header he thong trong curl
//X-Powered-By -> tim lo hong express, chua va, duc vao lo hong do ->nen su dung helmet de che dau lai
app.use(compression()); //giam bang thong 151kB -> ~0B

//init db
// require("./dbs/init.mongodb.lv0");
require("./dbs/init.mongodb.js");
// const { checkOverload } = require("./helpers/check.connect.js");
// checkOverload();

//init routers

// app.get("/", (req, res, next) => {
//   const strCompress = "Hello Fantipjs!";
//   return res.status(200).json({
//     message: "Welcome Fantipjs!",
//     metadata: strCompress.repeat(10000),
//   });
// });

app.use("/", require("./routes"));

//handling error

module.exports = app;
