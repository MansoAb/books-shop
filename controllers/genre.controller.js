const Genre = require("../Models/Genre.model");

module.exports.genreControllers = {
  addGenre: async (req, res) => {
    const { name, description } = req.body;
    try {
      await Genre.create({
        name,
        description,
      });
      res.json("Genre created");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      Genre.findByIdAndRemove(req.params.id);
      res.json("Genre deleted");
    } catch (err) {
      res.json(err.message);
    }
  },
  showGenres: async (req, res) => {
    try {
      const genres = Genre.find();
      res.json(genres);
    } catch (err) {
      res.json(err.message);
    }
  },
};
