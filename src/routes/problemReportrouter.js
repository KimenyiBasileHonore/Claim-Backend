const express = require("express");
const router = express.Router();
const { createReport } = require("../controllers/problemReportController");


router.post("/reports", createReport);

module.exports = router;
