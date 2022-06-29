import express from "express";

const app = express();
const port = 3068;

app.get("/", (req, res) => {
  res.send(`<h1>Flaschcard API</h1>`);
});

app.listen(port, () => {
  console.log(`Listenning on http://localhost:${port}`);
});
