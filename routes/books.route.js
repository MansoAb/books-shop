const { Router } = require("express");
const router = Router();

const { bookControllers } = require("../controllers/books.controller");

router.post("/books", bookControllers.addBook);
router.delete("/books/:id", bookControllers.deleteBook);
router.patch("/books/:id", bookControllers.changeBook);
router.get("/books/:id", bookControllers.showBookById);
router.get("/books", bookControllers.showBooks);
router.get("/books/genre/:id", bookControllers.showBooksByGenre);

module.exports = router;
