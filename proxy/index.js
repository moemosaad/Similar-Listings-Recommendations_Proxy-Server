const express = require("express");
const proxy = require("http-proxy-middleware");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/:id", express.static(path.join(__dirname, "../views")));

app.use(
  "/api/carousel",
  proxy({ target: "http://ec2-18-223-116-251.us-east-2.compute.amazonaws.com/" })
);
app.use(
  "/api/similarlistings",
  proxy({ target: "http://ec2-54-174-166-132.compute-1.amazonaws.com/" })
);

app.listen(3000, () => console.log("Proxy Server Working!!!"));
