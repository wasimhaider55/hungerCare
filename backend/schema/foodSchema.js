const mongoose = require("mongoose");

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
  coll: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
