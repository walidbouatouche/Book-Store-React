const express = require('express');
const router = express.Router();
const favoriteCtrl = require('../_controllers/favorite');
const favoriteValidation = require('../_validations/favorite');
const auth = require('../_middleware/authorize');
const bookValidation = require('../_validations/book');

router.post('/', auth,bookValidation.idBookValidation ,
    favoriteCtrl.addToFavorite
);
router.get('/', auth,favoriteCtrl.getMyFavorite ,
    favoriteCtrl.addToFavorite
);
router.delete('/:favoriteId',auth,favoriteCtrl.deleteOneFavori)
module.exports = router;