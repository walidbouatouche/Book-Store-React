const express = require('express');
const router = express.Router();
const userCtrl = require('../_controllers/user');
const userValidation = require('../_validations/user');

router.post('/signup', userValidation.signupValidation, userCtrl.signup);

router.post('/login', userValidation.signupValidation, userCtrl.login);
module.exports = router;