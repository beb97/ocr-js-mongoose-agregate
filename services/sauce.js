const Sauce = require("../models/Sauce");

exports.getAll = async function () {
  try {
    const sauces = await Sauce.find().populate("user");
    return sauces;
  } catch (e) {
    throw Error("Error while getting sauces : " + e.message);
  }
};

exports.add = async function (s) {
  try {
    const sauce = new Sauce(s);
    const newSauce = await sauce.save();
    return newSauce;
  } catch (e) {
    throw Error("Error while adding sauce : " + e);
  }
};
