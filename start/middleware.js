const express = require("express");
const cors = require("cors");
const homeRotes = require("../routers/home");
const authRoutes = require("../routers/authRoutes");
const codeRoutes = require("../routers/codeRoutes");
const codingspaceRoutes = require("../routers/codingspaceRoutes");
const { validateToken } = require("../pages/dashboard/other");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/", homeRotes);
  app.use("/api/auth", authRoutes);
  app.use("/api/code", validateToken, codeRoutes);
  app.use("/api/codingspace", validateToken, codingspaceRoutes);
};
