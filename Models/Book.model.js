const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
});

module.exports = mongoose.model("Book", bookSchema);
