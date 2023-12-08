import ProblemReport from '../models/problemReportModel';
const Company = require('../models/company');

exports.getReportsByCompany = async (req, res) => {
  try {
    console.log(req.user);
    const report = await ProblemReport.find({company:req.user._id});
    if (!report) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.status(200).json(report);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
