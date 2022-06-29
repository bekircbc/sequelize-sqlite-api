const express = require("express");
const { sequelize, Flaschcard } = require("./models");

const app = express();
const port = 3068;

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<h1>Flaschcard API</h1>`);
});

app.post("/flashcards", async (req, res) => {
  const { category, front, back } = req.body;
  try {
    const flashcard = await Flashcard.create({ category, front, back });
    return res.json(flashcard);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
});

app.listen(port, async () => {
  console.log(`Listening on http://localhost:${port}`);
  await sequelize.sync();
});
