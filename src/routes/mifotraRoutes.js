const express = require('express');
const mifotraController = require('../controllers/mifotraController');
import { createAdminAccount, loginAdmin } from "../controllers/mifotraController";

const router = express.Router();

router.post("/admin/register", createAdminAccount);
router.post("/admin/login", loginAdmin);
router.get('/mifotra/receive-report/:reportId', mifotraController.receiveReportById);
router.get('/mifotra/receive-reports', mifotraController.getAllReports);
router.get('/mifotra/companies', mifotraController.getRegisteredCompanies);
router.get('/mifotra/allusers',mifotraController.getAllUsers );

module.exports = router;
