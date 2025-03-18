import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  email: { type: String, required: true, unique: true, min: 2, max: 60, },
  password: { type: String, required: true, },
}, {
  versionKey: false,
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;
