const { Router } = require("express");
const {
  updateCode,
  getCode,
  deleteCode,
  addCode,
} = require("../pages/dashboard/code");

const router = Router();

router.post("/", addCode);
router.get("/:id", getCode);
router.put("/:id", updateCode);
router.delete("/:id", deleteCode);

module.exports = router;
