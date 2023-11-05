import mongoose from "mongoose";

const refreshSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "userDetails" },
    token: { type: String, required: true },
    //   expires: { type: Date, required: true },
  },
  {
    timestamps: true, // Enable timestamps
  }
);

const RefreshTokenSchema = mongoose.model("refreshToken", refreshSchema, "refreshToken");

export default RefreshTokenSchema;
