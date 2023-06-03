var express = require("express");
var router = express.Router();

// Set Cors
var cors = require("cors");
var whitelist = [
  "http://localhost:3001",
  "http://localhost:3001/login",
  "http://localhost:444",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

var userController = require("../controllers/user/user.controller");

/* GET users listing. */
router.get("/users", cors(corsOptions), userController.getUsers);
router.get("/user/:id", userController.getUser);
router.get("/logout", cors(corsOptions), userController.logout);

/* POST users listing. */
router.post("/register", cors(corsOptions), userController.registration);
router.post("/login", cors(corsOptions), userController.login);

module.exports = router;
