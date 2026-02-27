"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      Todo.belongsTo(models.Type, {
        foreignKey: "TypeId",
      });
    }
  }
  Todo.init(
    {
      task: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Task can't empty",
          },
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        validate: {
          notEmpty: {
            message: "Status can't empty",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            message: "UserId must number",
          },
        },
      },
      TypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            message: "TypeId must number",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Todo",
    },
  );
  return Todo;
};
