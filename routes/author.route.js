const { Router } = require("express");
const router = Router();

const { authorControllers } = require("../controllers/author.controller");

router.post("/authors", authorControllers.addAuthor);
router.delete("/authors/:id", authorControllers.deleteAuthor);

module.exports = router;
