const express = require("express");

const app = express(); //APP WEB-SERVER

app.get("/", (req, res) => {
  res.send("<h2>Home page</h2>");
});

app.get("/contacts", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.send("<h2>Contacts page</h2>");
});

app.listen(8080, () => console.log("Server running"));
