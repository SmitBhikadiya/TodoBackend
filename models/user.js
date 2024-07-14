const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ["User", "Admin", "Librarian"], required: true },
  isActive: { type: Boolean, default: true },
  deactivationReason: { type: String },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  address: { type: String },
  phoneNumber: { type: String },
});

module.exports = mongoose.model("User", userSchema);
