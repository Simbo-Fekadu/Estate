import { Timestamp } from "mongodb";
import mongoose, { model } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.iconarchive.com/show/papirus-status-icons-by-papirus-team/avatar-default-icon.html",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
