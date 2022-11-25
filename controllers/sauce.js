const saucesService = require("../services/sauce");

exports.getAll = async function (req, res) {
  console.log("sauce.getAll");
  try {
    const sauces = await saucesService.getAll();
    return res.status(200).json(sauces);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

exports.add = async function (req, res) {
  console.log("sauce.add");
  const sauce = {
    name: req.body.name,
    description: req.body.description,
    user: req.body.userId,
  };

  try {
    const newSauce = await saucesService.add(sauce);
    return res.status(200).json(newSauce);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
