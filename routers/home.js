const { Router } = require("express");
const { Test } = require("../models/user");
const router = Router();

// categories
router.get("/", (req, res) => {
  res.send("home page");
});
app.get("/add", async (req, res) => {
  await addOneUser();
  const users = await Test.find();
  res.send(users || "no users");
});
router.get("/user", (req, res) => {
  res.send("user page");
});
const addOneUser = async () => {
  const user = new Test({
    name: "John",
  });
  const result = await user.save();
};

module.exports = router;
