import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  CompanyName: String,
  Location: String,
  phone: Number, 
  email: String, 
  role: {
    type: String,
    default: "company",
  },
  password: String, 
});

const Company = mongoose.model("Company", companySchema);

export default Company;
