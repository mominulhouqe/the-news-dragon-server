const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const catagories = require("./data/Catagories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon is Running");
});
app.get("/catagrories", (req, res) => {
  res.send(catagories);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/catagrories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const catagoriesNews = news.filter((n) => parseInt(n.category_id ) === id);
    console.log(catagoriesNews);
    res.send(catagoriesNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is Running Port: ${port}`);
});
