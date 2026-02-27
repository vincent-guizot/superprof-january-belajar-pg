"use strict";

const data = require("./data.json");

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = data.users.map((u) => ({
      ...u,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const types = data.types.map((t) => ({
      ...t,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const todos = data.todos.map((td) => ({
      ...td,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Users", users);
    await queryInterface.bulkInsert("Types", types);
    await queryInterface.bulkInsert("Todos", todos);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
    await queryInterface.bulkDelete("Types", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
