require("express-async-errors");
const app = require("express")();
const config = require("config");
const winston = require("winston");
const mongoose = require("mongoose");

require("./start/logger")();

require("./start/middleware")(app);

const mongoURL =
  "mongodb+srv://vercel-admin-user:nw6x60RgXCAjb3Q1@cluster0.6kysb.mongodb.net/codingspace";

mongoose.connect(mongoURL, { useUnifiedTopology: true }).then(() => {
  winston.debug("success mongodb connect");
});

app.listen(5001, () => {
  console.log("5001 port connected successfuly...");
});
