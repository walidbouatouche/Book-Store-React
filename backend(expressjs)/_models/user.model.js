const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    adresse: { type: String, required: true },
    phone: { type: String, required: true },
    imgUrl: { type: String, required: true },
    aubouteMe: { type: String, required: true },
    role: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);