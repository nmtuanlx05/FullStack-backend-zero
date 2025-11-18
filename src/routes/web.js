const express = require("express");
const {
  handleGetHomePage,
  getABC,
  getHoiDanIT,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/router',handler)

router.get("/", handleGetHomePage);

router.get("/abc", getABC);

router.get("/hoidanit", getHoiDanIT);

module.exports = router; // export deafault
