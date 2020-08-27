const express = require('express');
const router = express.Router();
const userCtrl = require('../_controllers/user');
const userValidation = require('../_validations/user');
router.post('/singup', userValidation, userCtrl.signup);

module.exports = router;