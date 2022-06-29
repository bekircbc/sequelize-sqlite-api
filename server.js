const express = require("express");

const app = express();
const port = 3068;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<h1>Flaschcard API</h1>`);
});

app.listen(port, () => {
  console.log(`Listenning on http://localhost:${port}`);
});
