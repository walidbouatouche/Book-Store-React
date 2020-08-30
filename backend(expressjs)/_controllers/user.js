const User = require('../_models/user.model');
const bcrypt = require('bcryptjs');
const response = require('../_helpers/response')
const jwt = require('jsonwebtoken');
exports.signup = (req, res, next) => {


    const { email } = req.body
    let d = new Date();

    try {

        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    email,
                    password: hash,
                    role: "user",
                    createdAt: d,
                    updatedAt: d,
                });
                user.save()
                    .then(() => response(res, 201, { message: 'User created !' }))
                    .catch(error => response(res, 400, { message: "Choose other Email" }));
            })
            .catch(error => response(res, 401, { message: 'Unauthorized' }));
    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }


};



exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User not found ' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Incorrect password!' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        role: user.role,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};