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

exports.deleteOneBook = (req, res, next) => {
console.log(req.body)
    const { bookId } = req.body.value
    console.log(bookId)
    try {

        Book.deleteOne({ _id: bookId }).then(
            () => {
                response(res, 200, { message: "Book deleted" })
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

exports.updateBook = (req, res, next) => {

    const { bookId, amazonLink, title, description } = req.body


    try {

        Book.updateOne({ _id: bookId }, { _id: bookId, amazonLink, title, description })
            .then(() => response(res, 201, { message: 'Book updated!' }))
            .catch(error => response(res, 400, { message: "somthing worng" }));

    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }


};
