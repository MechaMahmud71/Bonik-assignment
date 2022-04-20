const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/get-all-data", controller.getAllData);
router.post("/insert-data", controller.postData);
router.get("/:startDate/:endDate/:status", controller.getDataByDates);

module.exports = router;