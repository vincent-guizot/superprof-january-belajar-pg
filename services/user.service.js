const { Op } = require("sequelize");
const { User } = require("../models");
const { encryptPwd } = require("../helpers/bcrypt");

class UserService {
  static async getAll() {
    return User.findAll({
      order: [["id", "ASC"]],
    });
  }
  static async create(userData) {
    const { username, email, password } = userData;
    const hashedPwd = encryptPwd(password);

    return User.create({
      username,
      email,
      password: hashedPwd,
    });
  }
  static async getById(id) {
    return User.findByPk(id);
  }
  static async delete(id) {
    return User.destroy({ where: { id } });
  }
  static async update(id, userData) {
    return User.update(userData, { where: { id } });
  }
  static async search(keyword) {
    const condition = keyword
      ? {
          email: {
            [Op.iLike]: `%${keyword}%`,
          },
        }
      : {};

    return await User.findAll({
      // order: [["id", "ASC"]],
      where: condition,
    });
  }

  static async register(userData) {
    return User.create(userData);
  }
  static async login(email) {
    return User.findOne({ where: { email } });
  }
}

module.exports = UserService;
