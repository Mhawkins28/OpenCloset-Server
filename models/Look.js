const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LookSchema = new Schema({
  category: String,
  items: [String],
  notes: String,
  name: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Look = mongoose.model('Look',LookSchema);