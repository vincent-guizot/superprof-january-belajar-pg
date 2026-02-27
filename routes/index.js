const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});

const todoRouter = require("./todo");
const userRouter = require("./user");
const typeRouter = require("./type");
router.use("/todos", todoRouter);
router.use("/users", userRouter);
router.use("/types", typeRouter);

module.exports = router;
