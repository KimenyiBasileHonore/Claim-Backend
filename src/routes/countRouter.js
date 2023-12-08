const express = require('express');
const countController = require('../controllers/countController');

const router = express.Router();

router.get('/user-count', countController.countUsers);
router.get('/company-count', countController.countCompanies);
router.get('/report-count', countController.countProblemReports);

module.exports = router;
