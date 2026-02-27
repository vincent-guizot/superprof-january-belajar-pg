const { TodoService } = require("../services");

class TodoController {
  static async getAllTodos(req, res) {
    try {
      const todos = await TodoService.getAll();
      res.status(200).json(todos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getTodoById(req, res) {
    try {
      const id = +req.params.id;
      const todo = await TodoService.getById(id);
      if (todo) {
        res.status(200).json(todo);
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const todoData = req.body;
      const UserId = +req.userData.id;
      const todo = await TodoService.create(todoData, UserId);
      res.status(201).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const deleted = await TodoService.delete(id);
      if (deleted) {
        res.status(200).json({ message: "Todo deleted" });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    try {
      const id = +req.params.id;
      const todoData = req.body;
      const updated = TodoService.update(id, todoData);
      if (updated) {
        res.status(200).json({ message: "Todo updated" });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async search(req, res) {
    try {
      const { task } = req.query;
      const todos = await TodoService.search(task);
      res.status(200).json(todos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = TodoController;
