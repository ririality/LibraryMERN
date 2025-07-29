const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  patronId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patron', required: true },
  loanDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returnDate: Date,
  status: { type: String, default: 'Borrowed' }
});

module.exports = mongoose.model('Loan', loanSchema);