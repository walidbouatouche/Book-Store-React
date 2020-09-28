const Favorite = require('../_models/favorite.model');

const response = require('../_helpers/response')

exports.addToFavorite = (req, res, next) => {


    const { userId, bookId } = req.body



    let d = new Date();

    try {
    /*     Favorite.findOne({bookId}).then((res)=>{
console.log(res)
            if(res){
                response(res, 400, { message: " favori Already Added" })

            }
        }) 
        */ 
        const favorite = new Favorite({
            userId,
            bookId,
            createdAt: d,
            updatedAt: d
        });
        favorite.save()
            .then(() => response(res, 201, { message: 'Add to favorite !' }))
            .catch(error => response(res, 400, { message: " Error" }));

    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }


};


exports.deleteOneFavori = (req, res, next) => {

    const {  userId } = req.body
    const { favoriteId } = req.params

    try {

        Favorite.deleteOne({ _id: favoriteId, userId }).then(
            () => {
                response(res, 200, { message: " Favori deleted" })
            }
        ).catch(
            (error) => {
                response(res, 400, { message: "somthing worng" })
            }
        );
    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }



};




exports.getMyFavorite = (req, res, next) => {


    const { userId } = req.body

    console.log(userId)




    try {
        Favorite.find({ userId })
            .populate('bookId').exec((err, favoriteList) => {
                if (err) {
                    response(res, 400, { message: "Error" })
                }
                response(res, 201, favoriteList)
            })

    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }


};

