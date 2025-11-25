const express = require("express");
const {
  handleGetHomePage,
  getABC,
  getHoiDanIT,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/router',handler)

router.get("/", handleGetHomePage);

router.get("/abc", getABC);

router.get("/hoidanit", getHoiDanIT);

router.post("/create-user", postCreateUser);

module.exports = router; // export deafault
