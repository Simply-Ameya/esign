const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserModel = require("../model/user");

const secret = process.env.secret;

const registerSchema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
  phone: Joi.number().min(10).required(),
  gender: Joi.string().required(),
});
const loginSchema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

router.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await UserModel.findOne({ email: req.body.email });

  if (emailExists) return res.status(400).send("email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    phone: req.body.phone,
    gender: req.body.gender,
  });
  console.log(user);
  try {
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("email not found");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("invalid password");
  const payload = { user: user._id };
  const token = jwt.sign(payload, secret, { expiresIn: "30m" });
  res
    .header("auth-token", token)
    .status(200)
    .send({ token: token, user: user });
});

module.exports = router;
