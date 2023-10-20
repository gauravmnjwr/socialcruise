import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/db.js";
import User from "./models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  return res.json({ message: "Hey" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(500).json({ message: "User Not Found" });
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(200).json({ user, token });
    } else {
      return res.status(500).json({ message: "Check Username or password" });
    }
  } catch (error) {
    return res.status(500).json({ err: error });
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });

  const userFound = await User.findOne({ email: email });
  if (userFound) {
    return res.status(500).json({ message: "User Already Exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email: email,
    password: hashedPassword,
  });
  const user = await newUser.save();
  return res.status(200).json({ user, token });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is running on Port", PORT));
