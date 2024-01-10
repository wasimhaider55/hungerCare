import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import route from "./routing/route.js";

const app = express();

// the path of config env file
dotenv.config({
  path: "../.env",
});

// import the file conn
import("./DB/dbconnection.js");

app.use(cookieParser());
app.use(cors());
app.use(express.json());
// router import
app.use(route);

// import the port value from env file
const PORT = process.env.PORT;

// listening on port
app.listen(PORT || 3000, () => {
  console.log(`backend is running on ${PORT}`);
});
