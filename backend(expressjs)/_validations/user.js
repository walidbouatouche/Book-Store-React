const validateRequest = require('../_middleware/validate-request')
exports.signupValidation = (req, res, next) => {
    try {
        const schema = Joi.object({
            mail: Joi.string().required().email(),
            password: Joi.string().required()
        });
        validateRequest(req, next, schema);
    }
    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }
}