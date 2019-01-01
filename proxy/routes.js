const express = require("express");
const routeHandlers = require("./controllers/routeControllers.js");
const router = express.Router();

router.get("/", routeHandlers.retrieveClient);
router.get("/*", routeHandlers.alternateRoute);

module.exports = router;
