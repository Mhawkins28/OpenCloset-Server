const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InspoSchema = new Schema({
  photo: String,
  title: String,
  notes: String,
});


module.exports = Inspo = mongoose.model('Inspo',InspoSchema);