// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

const restaurants = require("./data/restaurants.json");
const menus = require("./data/menus.json");

app.get("/", (req, res) => {
  res.send("Restaurant API is running!");
});

app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

app.get("/api/menu/:resId", (req, res) => {
  const resId = req.params.resId;
  const menu = menus[resId];
  if (menu) {
    res.json({ id: resId, menu });
  } else {
    res.status(404).json({ error: "Menu not found for restaurant " + resId });
  }
});

app.listen(PORT, () => {
  console.log(`👨‍🍳 API server running at http://localhost:${PORT}`);
});
