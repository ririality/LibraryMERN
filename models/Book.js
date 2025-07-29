const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },                 // required
  author: { type: String, required: true },                // required
  genre: String,
  ISBN: { type: String, unique: true },                    // unique
  publicationYear: Number,
  availabilityStatus: { type: String, default: 'Available' }
});

module.exports = mongoose.model('Book', bookSchema);