const express = require('express');
const admin_router = express.Router();

const admin_controller = require('../controller');

admin_router.get('/', admin_controller.index)
admin_router.get('/hire_return', admin_controller.hire_return)
admin_router.get('/add_renter', admin_controller.add_renter)
admin_router.post('/doAdd', admin_controller.doAdd)
admin_router.get('/return', admin_controller.return)

module.exports = admin_router;