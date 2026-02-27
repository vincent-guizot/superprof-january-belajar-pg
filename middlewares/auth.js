const { verifyToken } = require("../helpers/jwt");
const { Todo } = require("../models");

const authentication = (req, res, next) => {
  try {
    console.log("Authentication");
    const { access_token } = req.headers;
    const userVerified = verifyToken(access_token);

    req.userData = userVerified;

    next();
  } catch (err) {
    console.log(err);
  }
};

const authorization = async (req, res, next) => {
  try {
    const { id } = req.params; // id todo dari URL
    const userId = req.userData.id; // dari middleware authentication
    const todo = await Todo.findByPk(+id);

    const todoFound = todo.dataValues;
    if (!todoFound) {
      res.status(404).json({ message: "Todo NotFound - Authorization" });
    }

    // cek apakah todo milik user
    if (todoFound.UserId !== userId) {
      res.status(403).json({ message: "Forbidden" });
    }

    // next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication, authorization };
