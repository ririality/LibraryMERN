const express = require('express');
const router = express.Router();
const Patron = require('../models/Patron'); 

// Add a new patron
router.post('/', async (req, res) => {
  const newPatron = new Patron(req.body);
  try {
    const savedPatron = await newPatron.save();
    res.json(savedPatron);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all patrons
router.get('/', async (req, res) => {
  try {
    const patrons = await Patron.find();
    res.json(patrons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific patron by ID
router.get('/:id', async (req, res) => {
  try {
    const patron = await Patron.findById(req.params.id);
    res.json(patron);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a patron
router.put('/:id', async (req, res) => {
  try {
    const updatedPatron = await Patron.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPatron);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a patron
router.delete('/:id', async (req, res) => {
  try {
    await Patron.findByIdAndDelete(req.params.id);
    res.json({ message: 'Patron deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;