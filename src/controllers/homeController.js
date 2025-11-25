const connection = require("../config/database");

const handleGetHomePage = (req, res) => {
  // process data
  //call model
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("checkABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>> req.body: ", req.body);
  res.send("create a new user");
};

module.exports = {
  handleGetHomePage,
  getABC,
  getHoiDanIT,
  postCreateUser,
};
