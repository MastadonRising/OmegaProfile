var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/projects", function (req, res) {
  res.render("Projects");
});

router.get("/contact", function (req, res) {
  res.render("Contact");
});

// Export routes for server.js to use.
module.exports = router;
