const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LookSchema = new Schema({
  catagory: String,
  items: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
  }],
  notes: String,
  lookName: String,
});

module.exports = Look = mongoose.model('Look',LookSchema);