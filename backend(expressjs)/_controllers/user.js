const User = require('../_models/user.model');
const bcrypt = require('bcryptjs');
const response = require('../_helpers/response')
exports.signup = (req, res, next) => {
    try {

        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    mail: req.body.mail,
                    password: hash
                });
                user.save()
                    .then(() => response(res, 201, { message: 'User created !' }))
                    .catch(error => response(res, 400, { message: error }));
            })
            .catch(error => response(res, 401, { message: 'Unauthorized' }));
    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }


};


