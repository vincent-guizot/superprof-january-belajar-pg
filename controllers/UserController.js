const { encryptPwd, decryptPwd } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { UserService } = require("../services");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getUserById(req, res) {
    try {
      const id = +req.params.id;
      const user = await UserService.getById(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const deleted = await UserService.delete(id);
      if (deleted) {
        res.status(200).json({ message: "User deleted" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    try {
      const id = +req.params.id;
      const userData = req.body;
      const updated = await UserService.update(id, userData);
      if (updated) {
        res.status(200).json({ message: "User updated" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async search(req, res) {
    try {
      const { email } = req.query;
      const user = await UserService.search(email);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserService.login(email);
      if (user) {
        if (decryptPwd(password, user.password)) {
          const accessToken = generateToken(user);

          res.status(200).json({ message: "Login successful", accessToken });
        } else {
          res.status(401).json({ message: "Incorrect password" });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserService.register({ email, password });
      res.status(201).json({ message: "Registration successful", user });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
