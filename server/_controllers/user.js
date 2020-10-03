const User = require('../_models/user.model');
const bcrypt = require('bcryptjs');
const response = require('../_helpers/response') ///response *_*
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
                    //role: "admin",
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
                return response(res, 401, { message: 'User not found' });
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
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getUserInfos = (req, res, next) => {
    try {


        const { userId } = req.body

        User.find({ _id: userId }).select("-password -role")
            .then(user => {
                if (!user) {
                    response(res, 401, { message: 'User not found' })
                }
                else {

                    res.status(200).json(user);
                }

            })
            .catch(error => res.status(400).json({ error }));

    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }



}



/* 
User.findOneAndUpdate({username: req.params.username}, {username: req.body.username}, function(err, user) {
   
}); */