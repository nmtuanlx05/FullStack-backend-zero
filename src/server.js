require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || "localhost";

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine
configViewEngine(app);

// khai bao route
app.use("/", webRoutes);

// 2.  LOGIC KẾT NỐI:
// Bọc toàn bộ phần await vào trong một hàm async tự chạy (IIFE)
(async () => {
  try {
    // create the connection to database
    console.log(">>> Kết nối Database thành công!");
    // simple query
    // Lưu ý: Nếu bảng Users chưa có, lệnh này sẽ báo lỗi "Table doesn't exist"
    const [results, fields] = await connection.query("select * from Users u");
    console.log(">>>> Results: ", results);
  } catch (err) {
    console.log(">>> Lỗi Database: ", err.message);
  }
})();

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
