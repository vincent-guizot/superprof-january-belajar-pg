const { Op } = require("sequelize");
const { Type } = require("../models");

class TypeService {
  static async getAll() {
    return Type.findAll({
      order: [["id", "ASC"]],
    });
  }
  static async create(typeData) {
    return Type.create(typeData);
  }
  static async getById(id) {
    return Type.findByPk(id);
  }
  static async delete(id) {
    return Type.destroy({ where: { id } });
  }
  static async update(id, typeData) {
    return Type.update(typeData, { where: { id } });
  }
  static async search(keyword) {
    const condition = keyword
      ? {
          task: {
            [Op.iLike]: `%${keyword}%`,
          },
        }
      : {};

    return await Type.findAll({
      // order: [["id", "ASC"]],
      where: condition,
    });
  }
}

module.exports = TypeService;
