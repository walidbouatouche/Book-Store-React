const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const bookSchema = mongoose.Schema({

    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    publishedAt: { type: String, required: true },
    addBy: { type: String, required: true },
    createdAt: { type: String, required: true },
    rate: { type: Number, required: true },
    updatedAt: { type: String, required: true }
});

bookSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Book', bookSchema);