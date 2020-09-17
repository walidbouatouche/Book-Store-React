const express = require('express');
const router = express.Router();
const bookCtrl = require('../_controllers/book');
const bookValidation = require('../_validations/book');

router.post('/', bookValidation.addBookValidation, bookCtrl.addBook);
router.get('/', bookCtrl.getAllBook);
router.delete('/:bookId', bookValidation.idBookValidation, bookCtrl.deleteOneBook);


module.exports = router;