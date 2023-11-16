const express = require("express");
const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  //   res.json(books);
  res.json(books);
});

app.listen(8080);
