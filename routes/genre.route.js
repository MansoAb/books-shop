const { Router } = require("express");
const router = Router();

const { genreControllers } = require("../controllers/genre.controller");

router.post("/genres", genreControllers.addGenre);
router.delete("/genres/:id", genreControllers.deleteGenre);
router.get("/genres", genreControllers.showGenres);

module.exports = router;
