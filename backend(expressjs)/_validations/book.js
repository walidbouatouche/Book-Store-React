const validateRequest = require('../_middleware/validate-request')
const Joi = require('joi')
exports.addBookValidation = (req, res, next) => {

    try {
        const data = req.body
        const schema = Joi.object({
            title: Joi.string().required(),
            amazonLink: Joi.string().required(),
            description: Joi.string().required()


        });
        validateRequest(res, req, data, next, schema);
    }
    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }
}

exports.idBookValidation = (req, res, next) => {
 
    try {
        const data = { bookId: req.params.bookId }
         
        const schema = Joi.object({
            bookId: Joi.string().required(),



        });
        validateRequest(res, req, data, next, schema);
    }
    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }
}