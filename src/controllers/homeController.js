const handleGetHomePage = (req, res) => {
  // process data
  //call model

  res.send("Hello World! & Nodemonnn");
};

const getABC = (req, res) => {
  res.send("checkABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  handleGetHomePage,
  getABC,
  getHoiDanIT,
};
