const userRouter = require("express").Router();
const { UserController } = require("../controllers");

// Authentication routes
userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);

// Basic CRUD routes for User
userRouter.get("/", UserController.getAllUsers);
userRouter.get("/detail/:id", UserController.getUserById);
userRouter.post("/create", UserController.create);
userRouter.delete("/delete/:id", UserController.delete);
userRouter.put("/update/:id", UserController.update);

// Searching
userRouter.get("/search", UserController.search);

module.exports = userRouter;
