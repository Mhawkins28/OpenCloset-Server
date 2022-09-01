const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClosetSchema = mongoose.Schema({
  clothingItem: String,
  catagory: { type: String, required: true },
  photo:{ type: String, required: true },
  notes: String,
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Closet = mongoose.model("Closet", ClosetSchema);

module.exports = Closet;