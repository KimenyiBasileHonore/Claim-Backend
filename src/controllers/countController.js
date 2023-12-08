import User from '../models/user.js';
import Company from '../models/company.js';
import ProblemReportModel from '../models/problemReportModel.js';

// Function to count registered users
const countUsers = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.json({ count: userCount });
  } catch (error) {
    console.error('Error counting users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to count registered companies
const countCompanies = async (req, res) => {
  try {
    const companyCount = await Company.countDocuments();
    res.json({ count: companyCount });
  } catch (error) {
    console.error('Error counting companies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to count problem reports
const countProblemReports = async (req, res) => {
  try {
    const reportCount = await ProblemReportModel.countDocuments();
    res.json({ count: reportCount });
  } catch (error) {
    console.error('Error counting problem reports:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { countUsers, countCompanies, countProblemReports };
