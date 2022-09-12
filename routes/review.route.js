const { Router } = require("express");
const router = Router();

const { genreControllers } = require("../controllers/genre.controller");

router.post("/reviews", genreControllers.addGenre);
router.delete("/reviews/:id", genreControllers.deleteGenre);
router.get("/reviews/book/:id", genreControllers.showGenres);

module.exports = router;
