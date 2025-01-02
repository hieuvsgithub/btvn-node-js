import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "member",
      enum: ["member", "admin", "superAdmin"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
