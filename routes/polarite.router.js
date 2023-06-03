var express = require("express");
var router = express.Router();
const polariteController = require("../controllers/polarite/polarite.controller");

/* GET nodes listing. */
router.get("/polarities", polariteController.getPolarities);

/* POST nodes listing. */
router.post("/polarite", polariteController.addOne);
router.post("/ecologicalThemesCount", polariteController.getEcologicalThemesCount);
router.post("/energeticalThemesCount", polariteController.getEnergeticalThemesCount);


module.exports = router;
