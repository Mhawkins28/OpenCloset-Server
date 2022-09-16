const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LookSchema = new Schema({
  category: String,
  items: [String],
  notes: String,
  lookName: String,
});

module.exports = Look = mongoose.model('Look',LookSchema);