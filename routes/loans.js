const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan'); 

// Create a new loan (a book borrowed)
router.post('/', async (req, res) => {
  const newLoan = new Loan(req.body);
  try {
    const savedLoan = await newLoan.save();
    res.json(savedLoan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all loans
router.get('/', async (req, res) => {
  try {
    const loans = await Loan.find().populate('bookId').populate('patronId');
    res.json(loans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Mark a book as returned
router.put('/:id/return', async (req, res) => {
  try {
    const updatedLoan = await Loan.findByIdAndUpdate(req.params.id, {
      returnDate: new Date(),
      status: 'Returned'
    }, { new: true });
    res.json(updatedLoan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get overdue loans
router.get('/overdue', async (req, res) => {
  try {
    const today = new Date();
    const overdueLoans = await Loan.find({ dueDate: { $lt: today }, status: 'Borrowed' }).populate('bookId').populate('patronId');
    res.json(overdueLoans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;