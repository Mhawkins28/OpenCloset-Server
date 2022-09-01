const mongoose = require("mongoose");
const { Schema } = mongoose;

const InspoSchema = mongoose.Schema({
  photo: String,
  notes: String,
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Inspo = mongoose.model("Inspo", InspoSchema);

module.exports = Inspo;