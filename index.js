const express = require("express");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

app.use(require("./routes/books.route"));
app.use(require("./routes/review.route"));
app.use(require("./routes/genre.route"));

app.listen(port, function () {
  res.json("Cервер запущен.");
});
