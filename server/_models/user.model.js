const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    dateOfBirth: { type: String },
    adresse: { type: String },
    phone: { type: String  },
    imgUrl: { type: String  },
    aubouteMe: { type: String },
    role: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);