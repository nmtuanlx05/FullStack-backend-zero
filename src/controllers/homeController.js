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

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;

  console.log(">>> Check email: ", email);
  console.log(">>> Check name: ", myname);
  console.log(">>> Check city: ", city);

  // Viết câu lệnh SQL (Dùng dấu ? đại diện cho tham số)
  // Cấu trúc: INSERT INTO tên_bảng (cột1, cột2, cột3) VALUES (?, ?, ?)
  let sql = "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)";

  // 3. Gom dữ liệu vào một mảng (Thứ tự phải khớp với dấu ?)
  let params = [email, myname, city];

  try {
    //  Thực thi câu lệnh (Có await)
    // connection.query(câu_lệnh, [dữ_liệu_thay_thế])
    await connection.query(sql, params);

    res.send("Đã tạo người dùng mới thành công!");
  } catch (error) {
    console.log(error);
    res.send("Lỗi khi thêm người dùng!");
  }
};
module.exports = {
  handleGetHomePage,
  getABC,
  getHoiDanIT,
  postCreateUser,
};
