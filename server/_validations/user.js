const validateRequest = require('../_middleware/validate-request')
const Joi = require('joi')
exports.signupValidation = (req, res, next) => {


    try {
        const data = req.body
        const schema = Joi.object({
            email: Joi.string().required().email(),
            password: Joi.string().required()

        });
        validateRequest(res, req, data, next, schema);
    }
    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }
}




exports.userInfoValidation = (req, res, next) => {
    const data = {
        fullName,
        dateOfBirth,
        adresse,
        phone,
        imgUrl,
        aubouteMe
    } = req.body
    try {

        const schema = Joi.object({
            fullName: Joi.string().required(),
            dateOfBirth: Joi.string().required(),
            adresse: Joi.string().required(),
            phone: Joi.number().required(),
            imgUrl: Joi.string().required(),
            aubouteMe: Joi.string().required()

        });
        validateRequest(res, req, data, next, schema);
    }
    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }
}

