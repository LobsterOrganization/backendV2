const mongoose = require("mongoose");
const chalk = require("chalk");
const ora = require("ora");
const config = require("config");

const dbConfig = config.get("Lobster-Project.dbConfig.dbName");
const url = dbConfig;

mongoose.connect(url, {});

var spinner = ora("Trying to connect to the database...\n").start();
var connectionOpened = false;

mongoose.connection.on("connecting", function () {
  spinner.start();
});

mongoose.connection.on("error", function (error) {
  spinner.stop();
  console.log(
    chalk.bgKeyword("orange").black(" ERROR "),
    chalk.keyword("orange")("Error in MongoDB connection " + error)
  );
});

mongoose.connection.on("connected", function () {
  spinner.stop();
  console.log(
    chalk.bgGreen.black("   CONNECTED   "),
    chalk.green("Connection to the database successfully established")
  );
});

mongoose.connection.once("open", function () {
  connectionOpened = true;
});

mongoose.connection.on("reconnected", function () {});

mongoose.connection.on("disconnected", function () {
  if (connectionOpened) {
    console.log(
      chalk.bgRed.black("  DISCONNECTED  "),
      chalk.red("Connection to the database lost.")
    );
    spinner = ora("Trying to recconnect to the database...\n").start();
  }
});

module.exports = mongoose.connection;
