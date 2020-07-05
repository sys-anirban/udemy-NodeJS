const http = require("http");
const routes = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/add", (req, res, next) => {
  console.log("req", req.url);
  res.send(
    "<div><form method='POST' action='/products'><label>Products</label><input type='text' name='product' /><button type='submit'>Save</button></form></div>"
  );
});
app.get("/products", (req, res, next) => {
  console.log("req", req.body);
  res.redirect("/checkroute");
});
app.use("/checkroute", (req, res, next) => {
  res.send("<h1>checkroute</h1>");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Root Route</h1>");
});

app.listen(port);
