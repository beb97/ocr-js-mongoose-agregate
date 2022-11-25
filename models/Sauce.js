const mongoose = require("mongoose");
const { Schema } = mongoose;

const sauceSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Sauce", sauceSchema);
