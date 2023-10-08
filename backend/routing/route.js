const express = require("express");
const router = express.Router();
const User = require("../schema/schema");
const bcrypt = require("bcrypt");

// its for / page routing
router.post("/register", async (req, res) => {
  try {
    const { name, phone, email, password, cpassword } = req.body;

    if (!name || !phone || !email || !password || !cpassword) {
      return res.status(422).json({ err: "Please fill in all fields" });
    }
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ err: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ err: "Password are not Matching" });
    } else {
      const user = new User({ name, phone, email, password, cpassword });
      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Failed to register" });
  }
});

// its for Login page routing
router.post("/LogIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ err: "Fill in all fields" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credentials (Password)" });
      } else {
        console.log(userLogin);
        res.status(201).json({ message: "User logged in successfully" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credentials (Email)" });
    }
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Failed to log in" });
  }
});

module.exports = router;
