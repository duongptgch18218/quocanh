const express = require('express');
const books_router = express.Router();

const books_controller = require('../controller/books');

books_router.get('/library', books_controller.library) // Lấy hàm ở key index
books_router.get('/detail', books_controller.detail)
books_router.post('/doUpdate', books_controller.doUpdate)
books_router.post('/delete', books_controller.delete)
books_router.get('/insert', books_controller.insert)
books_router.post('/doInsert', books_controller.doInsert)

module.exports = books_router;