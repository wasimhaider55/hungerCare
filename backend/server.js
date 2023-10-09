const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app = express();

// the path of config env file
dotenv.config({ path: "./config.env" });

// import the file conn
require("./database/dbconnection");

// router import
app.use(express.json());
app.use(require("./routing/route"));

// import the port value from env file
const PORT = process.env.PORT;

// listening on port
app.listen(PORT || 3000, () => {
  console.log(`backend is running on ${PORT}`);
});
