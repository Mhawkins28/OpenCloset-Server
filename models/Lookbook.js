const mongoose = require("mongoose");
const { Schema } = mongoose;

const LookbookSchema = mongoose.Schema({
  
  //QUESTIONS ABOUT PHOTOS BELOW: User will be picking items from the "closet" to add to looks, what is the best way to refrence this, if I even need to-
  catagory: { type: String, required: true },
  photos:{ type: mongoose.Schema.Types.ObjectId, ref: "Closet", required: true },
  notes: String,
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  lookName: String,
  notes: String,
});

const Lookbook = mongoose.model("Lookbook", LookbookSchema);

module.exports = Lookbook;