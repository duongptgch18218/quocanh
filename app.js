const express = require('express'); //Thêm module express vào project.
const app = express(); //Khởi tạo một app mới sử dụng module express
// const port = 3000;  //tên cổng để chạy ứng dụng NodeJS 

app.use(express.static(require('path').join(__dirname, "public")))

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const engines = require('consolidate');
app.engine('hbs', engines.handlebars);

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'hbs'); // Sử dụng hbs làm view engine

const admin_Route = require('./routes/index');
app.use('/', admin_Route);

const books_Route = require('./routes/books');
app.use('/books', books_Route);

app.listen(process.env.PORT || 3000, function () {
    console.log("Your app running on port 3000");
})