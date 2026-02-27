const typeRouter = require("express").Router();
const { TypeController } = require("../controllers");

// Basic CRUD routes for Todo
typeRouter.get("/", TypeController.getAllTypes);
typeRouter.get("/detail/:id", TypeController.getTypeById);
typeRouter.post("/create", TypeController.create);
typeRouter.delete("/delete/:id", TypeController.delete);
typeRouter.put("/update/:id", TypeController.update);

// Searching
typeRouter.get("/search", TypeController.search);

module.exports = typeRouter;
