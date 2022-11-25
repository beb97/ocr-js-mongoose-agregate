const userService = require('../services/user');

exports.add = async function (req, res) {
    console.log("user.create");
    const user =  req.body;

    try {
        const newUser = await userService.create(user)
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(400).json(error.message)
    }
};

exports.getAll = async function (req, res) {
    try {
        const users = await userService.getUsers()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json(error.message)
    }
};
