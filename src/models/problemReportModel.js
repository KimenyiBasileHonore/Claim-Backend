const mongoose = require("mongoose");

const problemReportSchema = new mongoose.Schema({
  firstName: String,
  email: String, 
  phone: String, 
  description: String, 
  attachment: {
    path:String 
  }, 
  company:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Company"
  },
  
  date: {
    type: Date,
    default: Date.now,
  },
});

const ProblemReport = mongoose.model("ProblemReport", problemReportSchema);

module.exports = ProblemReport;
