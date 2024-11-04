const express = require("express");
const { createIncCtrl, fetchAllIncCtrl, fetchSingleIncCtrl, updateIncCtrl, deleteIncCtrl } = require("../../controllers/income/incomeCtrl");
const incomeRoute = express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");

// Applying authMiddleware to protect these routes
incomeRoute.post("/", authMiddleware, createIncCtrl);
incomeRoute.get("/", authMiddleware, fetchAllIncCtrl);
incomeRoute.get("/:id", authMiddleware, fetchSingleIncCtrl);
incomeRoute.put("/:id", authMiddleware, updateIncCtrl);
incomeRoute.delete("/:id", authMiddleware, deleteIncCtrl);

module.exports = incomeRoute;
