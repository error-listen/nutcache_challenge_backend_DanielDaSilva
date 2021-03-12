const express = require('express');

const employees_controller  = require('./controllers/employees');

const router = express.Router();

router.get('/nutemployee', employees_controller.get_employees);
router.post('/nutemployee', employees_controller.create_employee);
router.get('/nutemployee/:id', employees_controller.get_employee);
router.put('/nutemployee/:id', employees_controller.update_employee);
router.delete('/nutemployee/:id', employees_controller.delete_employee);

module.exports = router;