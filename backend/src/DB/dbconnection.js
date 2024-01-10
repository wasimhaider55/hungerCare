import mongoose from "mongoose";
const DB = process.env.DATA_BASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
