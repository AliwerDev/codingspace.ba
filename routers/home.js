const { Router } = require("express");
const { fintQuestion } = require("../pages/dashboard/findQuestion");
const router = Router();

// categories
router.get("/", (req, res) => {
  res.send("home page");
});
router.get("/:search", fintQuestion);

// router.get("/user", (req, res) => {
//   res.send("user page");
// });
module.exports = router;
