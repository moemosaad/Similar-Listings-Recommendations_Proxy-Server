const express = require("express");
const router = require("./routes.js");
const proxy = require("http-proxy-middleware");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));

app.set("view engine", "ejs");

app.use("/:id", express.static(path.join(__dirname, "../views")));
app.use("/api", proxy({ target: "http://ec2-54-174-166-132.compute-1.amazonaws.com/" }));
// app.use("/", router);

app.listen(3000, () => console.log("Proxy Server Working!!!"));
