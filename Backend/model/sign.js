const mongoose = require("mongoose");

const signSchema = new mongoose.Schema({
  email: { type: String, required: true, min: 6, max: 255 },
  fileId: { type: String, required: true },
  signers: { type: Array },
  title: { type: String, required: true },
  unsignedDocument: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("sign", signSchema);
