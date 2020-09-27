const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const favoriteSchema = mongoose.Schema({
    userId: { type: String, required: true },
    bookId: { type: mongoose.SchemaTypes.ObjectId, ref: "Book" },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
});

favoriteSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Favorite', favoriteSchema);

