const express = require("express");
const router = express.Router();
const User = require("../schema/schema");
const Contact = require("../schema/schema");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const authenticate = require("../middleware/authenticate");

router.use(cookieParser());
router.get("/contact", authenticate, (req, res) => {
  res.json("Hi");
  res.send(req.rootUser);
});

// its for / page routing
router.post("/reg", async (req, res) => {
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
      res.cookie("jwtoken", token, {
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

router.post("/contact", async (req, res) => {
  try {
    const newItem = new Contact(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create item" });
  }
});

router.get("/getMessage", async (req, res) => {
  try {
    const message = await Contact.find();
    if (!message) {
      return res.status(404).json({ msg: "message not available" });
    } else {
      res.status(200).json(message);
    }
  } catch (err) {
    res.status(400).json({ msg: "Server Error" });
  }
});

router.get("/getOneMessage/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const oneMessage = await Contact.findById(id);
    if (!oneMessage) {
      return res.status(400).json({ msg: "Message not found" });
    } else {
      res.status(200).json(oneMessage);
    }
  } catch (error) {
    res.status(400).json({ msg: "Server Error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteOne = await Contact.findByIdAndDelete(id);
    if (!deleteOne) {
      return res.status(400).json({ msg: "Message not found" });
    } else {
      res.status(200).json({ msg: "user deleted successfully" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Server Error" });
  }
});

module.exports = router;
