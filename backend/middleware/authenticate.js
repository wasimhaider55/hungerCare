const jwt = require("jsonwebtoken");
const User = require("../schema/schema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookie.jwtoken; // Corrected from req.cookie.jwttoken
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).json("unauthorized: not found user");
    console.log(err);
  }
};

module.exports = Authenticate;
