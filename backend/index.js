const express = require("express");
const cors = require("cors");

const products = require("./productsData");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Apna Store");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
