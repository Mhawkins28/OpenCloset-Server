const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
      type: String
  },
  category: {
      type: String,
      required: true
  },
  photo:{
      type: String,
      required: true
  },
  notes: {
      type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Item = mongoose.model('Item',ItemSchema);