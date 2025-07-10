import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  verified: { type: Boolean, default: false },
});

export default mongoose.model("User", usersSchema);