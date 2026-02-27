const { TypeService } = require("../services");

class TypeController {
  static async getAllTypes(req, res) {
    try {
      const types = await TypeService.getAll();
      res.status(200).json(types);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getTypeById(req, res) {
    try {
      const id = +req.params.id;
      const type = await TypeService.getById(id);
      if (type) {
        res.status(200).json(type);
      } else {
        res.status(404).json({ message: "Type not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const typeData = req.body;
      const type = await TypeService.create(typeData);
      res.status(201).json(type);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const deleted = await TypeService.delete(id);
      if (deleted) {
        res.status(200).json({ message: "Type deleted" });
      } else {
        res.status(404).json({ message: "Type not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    try {
      const id = +req.params.id;
      const typeData = req.body;
      const updated = TypeService.update(id, typeData);
      if (updated) {
        res.status(200).json({ message: "Type updated" });
      } else {
        res.status(404).json({ message: "Type not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async search(req, res) {
    try {
      const { name } = req.query;
      const todos = await TypeService.search(name);
      res.status(200).json(todos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = TypeController;
