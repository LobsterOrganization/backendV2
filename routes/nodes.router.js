var express = require("express");
var router = express.Router();

var nodeController = require("../controllers/node/node.controller");

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

/* GET nodes listing. */
router.get("/nodes", cors(corsOptions), nodeController.getNodes);

/* POST nodes listing. */
router.post("/node", nodeController.addOne);

module.exports = router;
