const ProblemReport = require("../models/problemReportModel");
const multer = require ("multer");
import upload from "../middleware/multerConfig";
// import multer from "multer";
import CompanyModel from "../models/company";

exports.createReport = async (req, res) => {
  try {
    console.log('Request received'); 

    upload.array('attachment')(req, res, async (err) => {
      console.log('Inside upload.array callback'); 

      if (err instanceof multer.MulterError) {
        console.error('File upload error:', err); // Log the multer error
        return res.status(400).json({ error: 'File upload error' });
      } else if (err) {
        console.error('Internal server error:', err); // Log the general error
        return res.status(500).json({ error: 'Internal server error' });
      }

      const { firstName, email, phone, companyName, description } = req.body;

      const company = await CompanyModel.findOne({ CompanyName: companyName })

      const id=company._id;
      const attachment = req.files.map((file) => file.filename);

      console.log('Received form data:', {

        firstName,
        email,
        phone,
        company,
        description,
        attachment,
      }); // Added for tracking

      const newReport = new ProblemReport({

        firstName,
        email,
        phone,
        description,
        attachment,
        company
      });

      console.log('Saving the report'); // Added for tracking

      const savedReport = await newReport.save();
      res.status(201).json({ message: "Problem report created successfully", report: savedReport });
    });
  } catch (error) {
    console.error('Catch block error:', error); // Log the catch block error
    res.status(500).json({ error: "Internal server error" });
  }
};