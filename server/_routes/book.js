const express = require('express');
const router = express.Router();
const bookCtrl = require('../_controllers/book');
const bookValidation = require('../_validations/book');

router.post('/', bookValidation.addEditBookValidation, bookCtrl.addBook);
router.get('/', bookCtrl.getAllBook);
router.delete('/:bookId', bookValidation.idBookValidation, bookCtrl.deleteOneBook);
router.put('/:bookId', bookValidation.addEditBookValidation, bookValidation.idBookValidation, bookCtrl.updateBook);



/*
here Other Method
 when route  
router.param('bookId',bookValidation.addEditBookValidation)
*/

module.exports = router;