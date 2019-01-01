const path = require("path");
const proxy = require("../helpers/proxyHelpers.js");

const routeHandlers = {
  retrieveClient: (req, res) => {
    var url = req.query.url;
    console.log(url);
    proxy.getClient(url, (err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(results);
      }
    });
  },
  alternateRoute: (req, res) => {
    res.sendStatus(404);
  }
};

module.exports = routeHandlers;
