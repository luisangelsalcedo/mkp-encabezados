const express = require("express");
const { stringify } = require("nodemon/lib/utils");

const app = express();

app.get("/", (req, res) => {
  res.send(req.header("user-agent"));
});

app.listen("3000", () => {
  console.log("server run");
});
