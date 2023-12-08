import mongoose from "mongoose";

const mifotraSchema = new mongoose.Schema({
  email: String, 
  role: {
    type: String,
    default: "mifotra",
  },
  password: String, 
});

const Mifotra = mongoose.model("Mifotra", mifotraSchema);

export default Mifotra;
