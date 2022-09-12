const Book = require("../Models/Book.model");

module.exports.bookControllers = {
  addBook: async (req, res) => {
    const { name, author, genre } = req.body;
    try {
      await Book.create({ name, author, genre });
      res.json("Book created");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteBook: async (req, res) => {
    const { id } = req.params;
    try {
      await Book.findByIdAndRemove(id);
      res.json("Book was delete");
    } catch (err) {
      res.json(err.message);
    }
  },
  changeBook: async (req, res) => {
    const { id } = req.params;
    const { name, author, genre } = req.body;
    try {
      const book = await Book.findByIdAndUpdate(id, { name, author, genre });
      res.json(book);
    } catch (err) {
      res.json(err.message);
    }
  },
  showBookById: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Book.findById(id).populate("author genre", "name");
      res.json(book);
    } catch (err) {
      res.json(err);
    }
  },
  showBooks: async (req, res) => {
    try {
      const books = await Book.find().populate("author genre", "name");
      res.json(books);
    } catch (err) {
      res.json(err.message);
    }
  },
  showBooksByGenre: async (req, res) => {
    const { id } = req.params;
    try {
      const books = await Book.find({ genre: id }).populate(
        "author genre",
        "name"
      );
      res.json(books);
    } catch (err) {
      res.json(err.message);
    }
  },
};
