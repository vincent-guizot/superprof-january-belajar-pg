const todoRouter = require("express").Router();
const { TodoController } = require("../controllers");
const { authentication, authorization } = require("../middlewares/auth");

// Basic CRUD routes for Todo
todoRouter.get("/", TodoController.getAllTodos);
todoRouter.get("/detail/:id", TodoController.getTodoById);
todoRouter.post("/create", authentication, TodoController.create);
todoRouter.delete(
  "/delete/:id",
  authentication,
  authorization,
  TodoController.delete,
);
todoRouter.put(
  "/update/:id",
  authentication,
  authorization,
  TodoController.update,
);

// Searching
todoRouter.get("/search", TodoController.search);

module.exports = todoRouter;
