const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: String,
  nameAuthor: String,
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
