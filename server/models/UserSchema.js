import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastloginUpdateTime: {
    type: Number,
  },
  lastloginTime: {
    type: Number,
  },
  role: {
    type: String,
  },
});
const User = mongoose.model("userDetails", userSchema, "userDetails");
export default User;
