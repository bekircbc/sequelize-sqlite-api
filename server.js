const express = require("express");
const { sequelize } = require("./models");

const app = express();
const port = 3068;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<h1>Flaschcard API</h1>`);
});

app.listen(port, async () => {
  console.log(`Listening on http://localhost:${port}`);
  await sequelize.sync();
});
