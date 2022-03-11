const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("documents", documentSchema);
