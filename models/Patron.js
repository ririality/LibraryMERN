const mongoose = require('mongoose');

const patronSchema = new mongoose.Schema({
  name: { type: String, required: true },                 // required
  address: String,
  phone: { type: String, required: true },                 // required
  membershipNumber: { type: String, unique: true }         // unique
});

module.exports = mongoose.model('Patron', patronSchema);