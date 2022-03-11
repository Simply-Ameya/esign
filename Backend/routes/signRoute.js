const express = require("express");
const router = express.Router();
const signModel = require("../model/sign");

router.post("/upload", async (req, res) => {
  const sign = new signModel({
    email: req.body.email,
    fileId: req.body.fileId,
    signers: req.body.signers,
    title: req.body.title,
    unsignedDocument: req.body.unsignedDocument,
    userId: req.body.userId,
  });
  try {
    const startSign = await sign.save();
    res.status(200).send(startSign);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
