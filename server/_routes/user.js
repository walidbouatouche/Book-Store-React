const express = require('express');
const router = express.Router();
const userCtrl = require('../_controllers/user');
const userValidation = require('../_validations/user');
const auth = require('../_middleware/authorize');

router.post('/signup', userValidation.signupValidation, userCtrl.signup);

router.post('/login', userValidation.signupValidation, userCtrl.login);
router.get('/getuserdata', auth,userCtrl.getUserInfos);


module.exports = router;