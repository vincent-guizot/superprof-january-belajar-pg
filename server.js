const express = require("express");
const app = express();

// import dotenv
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
