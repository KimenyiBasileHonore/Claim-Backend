const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
import checkAuth from '../middleware/checkAuthentication';

router.get('/company',checkAuth, companyController.getReportsByCompany);

module.exports = router;
