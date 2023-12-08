const ProblemReport = require('../models/problemReportModel');
import Company from '../models/company';
import User from '../models/user';
import Mifotra from "../models/Mifotra";

exports.createAdminAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newAdmin = new Mifotra({ email, password });

    await newAdmin.save();
    console.log(newAdmin);
    res.status(201).json({ message: "Admin account created successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newAdmin = await Mifotra.findOne({ email });

    if (!newAdmin || newAdmin.password !== password) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    res.status(200).json({ message: 'Admin logged in successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};




exports.receiveReportById = async (req, res) => {
  try {
    const { reportId } = req.params;
    const report = await ProblemReport.findById(reportId);

    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }
    
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    
    const reports = await ProblemReport.find();

    res.status(200).json({ reports });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getRegisteredCompanies = async (req, res) => {
  try {
    
    const companies = await Company.find({});
    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find(); 
  
      res.status(200).json({ users });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
  
