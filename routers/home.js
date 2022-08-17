const { Router } = require("express");
const { Test } = require("../models/user");
const router = Router();

// categories
router.get("/", (req, res) => {
  res.send("home page");
});
router.get("/user", (req, res) => {
  res.send("user page");
});
module.exports = router;
