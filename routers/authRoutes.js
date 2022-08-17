const { Router } = require("express");
const { login, getMe } = require("../pages/auth/login");
const createUser = require("../pages/auth/user");
const { validateToken } = require("../pages/dashboard/other");

const router = Router();

router.post("/", createUser);
router.post("/login", login);
router.get("/me", validateToken, getMe);

module.exports = router;
