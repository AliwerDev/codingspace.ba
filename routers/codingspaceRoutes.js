const { Router } = require("express");
const { getCodes, getCodeTypes } = require("../pages/dashboard/codingspace");

const router = Router();

router.get("/", getCodes);
router.get("/types", getCodeTypes);

module.exports = router;
