const User = require("../models/User");

exports.getUsers = async function () {
  try {
    const users = await User.find();
    return users;
  } catch (e) {
    throw Error("Error while getting users : " + e.message);
  }
};

exports.create = async function (u) {
  try {
    const user = new User({
      pseudo: u.pseudo,
      password: u.password,
    });

    const newUser = user.save();
    return newUser;
  } catch (e) {
    throw Error("Error while signing up user : " + e.message);
  }
};
