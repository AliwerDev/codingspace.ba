const winston = require("winston");
require("winston-mongodb");

module.exports = function () {
  winston.add(new winston.transports.Console());
  winston.add(
    new winston.transports.File({
      filename: "logs/codingspace.log",
      level: "error",
    })
  );
  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/codingspace-logs",
      level: "info",
    })
  );
  winston.exceptions.handle(
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/exceptions.log" })
  );

  process.on("unhandledRejection", (err) => {
    throw err;
  });
};
