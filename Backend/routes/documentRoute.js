const express = require("express");
const router = express.Router();
const documentModel = require("../model/document");

router.post("/upload", async (req, res) => {
  const document = new documentModel({
    url: req.body.url,
  });
  try {
    const savedDocument = await document.save();
    res.status(201).send(savedDocument);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
