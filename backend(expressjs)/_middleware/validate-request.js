module.exports = validateRequest;
const response = require('../_helpers/reponsereponse')
function validateRequest(res, req, next, schema) {

    try {
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            response(res, 400, { message: 'Error filling in data' })

        } else {
            req.body = value;
            next();
        }

    }
    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }

}