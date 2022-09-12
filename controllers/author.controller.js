const Author = require("../Models/Author.model");

module.exports.authorControllers = {
  addAuthor: async (req, res) => {
    const { name, description } = req.body;
    try {
      await Author.create({ name, description });
      res.json("Author created");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteAuthor: async (req, res) => {
    const { id } = req.params;
    try {
      await Author.findByIdAndRemove(id);
      res.json("Author was delete");
    } catch (err) {
      res.json(err.message);
    }
  },
};
