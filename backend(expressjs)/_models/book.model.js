const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const bookSchema = mongoose.Schema({

    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    amazonLink: { type: String, required: true },
});

bookSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Book', bookSchema);