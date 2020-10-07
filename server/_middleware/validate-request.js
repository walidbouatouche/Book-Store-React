module.exports = validateRequest;
const response = require('../_helpers/response')
function validateRequest(res, req, data, next, schema) {

    try {
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        const { error, value } = schema.validate(data, options);
        if (error) {
            response(res, 400, { message: 'Error filling in data' })

        } else {
            let newData = { ...req.body, ...value }

            req.body = newData;

            next();
        }

    }
    catch (err) {
        response(res, 400, { message: err.message || err.toString() })


    }

}