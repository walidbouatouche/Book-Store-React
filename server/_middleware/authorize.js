const jwt = require('jsonwebtoken');
const response = require('../_helpers/response')
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
         
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            response(res, 401, {
                message: 'Unknown error'
            });
        } else {
            req.body.userId = userId;
            next();
        }
    } catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }

};