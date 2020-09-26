const Favorite = require('../_models/favorite.model');

const response = require('../_helpers/response')

exports.addToFavorite = (req, res, next) => {


    const { userId, bookId } = req.body

    console.log(userId)
    console.log(bookId)
    console.log( req.body)

    
    let d = new Date();

    try {

        const favorite = new Favorite({
            userId,
            bookId,
            createdAt: d,
            updatedAt: d
        });
        favorite.save()
            .then(() => response(res, 201, { message: 'Add to favorite !' }))
            .catch(error => response(res, 400, { message: "Errers Validations" }));

    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }


};



