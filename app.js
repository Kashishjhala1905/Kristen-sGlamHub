const express = require("express");
const app = express();
const path = require("path");

app.use("views", express.static("views"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(4040, () => {
  console.log("App listening on port 4040");
});

app.get("/booknow", (req, res) => {
  res.render("booknow.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/services", (req, res) => {
  res.render("servies.ejs");
});

app.get("/beautyproducts", (req, res) => {
  res.render("beautyProducts.ejs");
});