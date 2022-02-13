const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const header = req.rawHeaders;
  res.send(header);
});

app.listen("3000", () => {
  console.log("server run");
});
