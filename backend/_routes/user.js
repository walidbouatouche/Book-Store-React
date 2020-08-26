const express = require('express');
const router = express.Router();
const userCtrl = require('../_controllers/user');
router.post('/login', userCtrl.signup);

module.exports = router;