const { Op } = require("sequelize");
const { Todo, User, Type } = require("../models");

class TodoService {
  static async getAll() {
    return Todo.findAll({
      order: [["id", "ASC"]],
      include: [User, Type],
    });
  }
  static async create(todoData, UserId) {
    return Todo.create({
      ...todoData,
      UserId,
    });
  }
  static async getById(id) {
    return Todo.findByPk(id);
  }
  static async delete(id) {
    return Todo.destroy({ where: { id } });
  }
  static async update(id, todoData) {
    return Todo.update(todoData, { where: { id } });
  }
  static async search(keyword) {
    const condition = keyword
      ? {
          task: {
            [Op.iLike]: `%${keyword}%`,
          },
        }
      : {};

    return await Todo.findAll({
      // order: [["id", "ASC"]],
      where: condition,
    });
  }
}

module.exports = TodoService;
