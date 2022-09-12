const Review = require("../Models/Review.model");

module.exports.reviewControllers = {
  addReview: async (req, res) => {
    const { text, nameAuthor, book } = req.body;
    try {
      await Review.create({ text, nameAuthor, book });
      res.json("Review created");
    } catch (err) {
      req.json(err.message);
    }
  },
  deleteReview: async (req, res) => {
    const { id } = req.params;
    try {
      await Review.findByIdAndRemove(id);
      res.json("Review was delete");
    } catch (err) {
      res.json(err.message);
    }
  },
  showReviewsByBook: async (req, res) => {
    const { id } = req.params;
    try {
      const reviews = Review.find({ book: id });
      res.json(reviews);
    } catch (err) {
      res.json(err.message);
    }
  },
};
