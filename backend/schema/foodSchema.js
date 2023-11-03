import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  orgName: {
    type: String,
    required: true,
  },
  orgType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  collection: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const Food = mongoose.model("FOOD", foodSchema);
module.exports = Food;
