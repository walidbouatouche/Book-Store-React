const Book = require('../_models/book.model');
const response = require('../_helpers/response')

exports.addBook = (req, res, next) => {

    const { amazonLink, title, description } = req.body


    try {
        const book = new Book({
            amazonLink, title, description
        });
        book.save()
            .then(() => response(res, 201, { message: 'Book added !' }))
            .catch(error => response(res, 400, { message: "somthing worng" }));

    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }


};



exports.getAllBook = (req, res, next) => {
    try {
        
        Book.find().then(
            (Books) => {
                response(res, 200, Books)
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