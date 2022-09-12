const express = require("express");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

app.use(express.json());
app.use(require("./routes/books.route"));
app.use(require("./routes/review.route"));
app.use(require("./routes/genre.route"));
app.use(require("./routes/author.route"));

mongoose.connect(
  "mongodb+srv://Mansur:1954@cluster0.xyb0huh.mongodb.net/test",
  function () {
    console.log("Подключено к монго");
  }
);

app.listen(port, function (req, res) {
  console.log("Сервер запущен.");
});
