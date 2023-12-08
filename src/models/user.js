import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nID: Number, 
  phone: Number, 
  email: String, 
  role: {
    type: String,
    default: "citizen",
  },
  password: String, 
});

const User = mongoose.model("User", userSchema);

export default User;
