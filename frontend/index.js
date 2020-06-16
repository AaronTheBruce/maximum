const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// Define a route.
app.get("/", (req, res) => {
  res.render("index"); //TODO check if the index.pug file exists and it is setup
});

app.get("/sign-up", (req, res) => {
  res.render("sign-up", { title: "Sign up page" });
});

app.get("/log-in", (req, res) => {
  res.render("log-in");
});

app.get("/stories", (req, res) => {
  res.render("index");
});

const port = 4001;
app.listen(port, () => {
  console.log(`Listing on port ${port}...`);
});

module.exports = app;
