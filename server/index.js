const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require("./models/signup");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/SocialMedia").then(() => {
  console.log("connected");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  schema.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is InCorrect");
      }
    } else {
      res.json("No Record Found");
    }
  });
});

app.post("/register/check-duplicate", async (req, res) => {
  const { email, username } = req.body;

  try {
    // Check if email already exists
    const existingEmail = await schema.findOne({ email });
    // console.log(existingEmail);
    if (existingEmail) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Check if username already exists
    const existingUsername = await schema.findOne({ name: username });
    if (existingUsername) {
      return res.status(400).json({ error: "Username already registered" });
    }

    // No duplicate found
    res.status(200).json({ message: "No duplicate found" });
  } catch (error) {
    console.error("Error during duplicate check:", error);
    res.status(500).json({ error: "Email or Username Already Exists" });
  }
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if email already exists
    const existingEmail = await schema.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Check if username already exists
    const existingUsername = await schema.findOne({ name: username });
    if (existingUsername) {
      return res.status(400).json({ error: "Username already registered" });
    }

    // Email and username don't exist, proceed with registration
    const newUser = new schema({
      name: username,
      email,
      password,
    });

    await newUser.save();
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
