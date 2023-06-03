require("./services/databaseConnectionService");

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors")
var helmet = require("helmet");
var helmetCsp = require("helmet-csp");
var bodyParser = require('body-parser');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users.router");
var nodesRouter = require("./routes/nodes.router");
var trendsRouter = require("./routes/trends.router");
var tweetsRouter = require("./routes/tweets.router");
var freqOccRouter = require("./routes/freqOcc.router");
var polariteRouter = require("./routes/polarite.router");
var sentimentCounterRouter = require("./routes/sentimentCounter.router");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/", nodesRouter);
app.use("/", trendsRouter);
app.use("/", tweetsRouter);
app.use("/", freqOccRouter);
app.use("/", polariteRouter);
app.use("/", sentimentCounterRouter);

// Style directory
app.use(
  "/stylesheets",
  express.static(path.join(__dirname, "public/stylesheets"))
);

// js directory
app.use(
  "/javascripts",
  express.static(path.join(__dirname, "public/javascripts"))
);

// node_modules directory
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

// Helmet and Helmet-CSP
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(
  helmetCsp({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "http://localhost:3001"],
      objectSrc: ["http://localhost:444/"],
      upgradeInsecureRequests: [],
    },
    reportOnly: false, // Envoi un rapport
  })
);
app.use(cors())
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
