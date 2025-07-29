const express = require('express');
const mongoose = require('mongoose');

// Create express app
const app = express();

app.use(express.json()); 

// Connect to MongoDB
const mongoURI = 'mongodb+srv://group5:School2025@cluster0.1xgw2z3.mongodb.net/librarydb?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas!');
})
.catch((err) => {
    console.log('Failed to connect to MongoDB:', err);
});

// Import route handlers
const bookRoutes = require('./routes/books');
const patronRoutes = require('./routes/patrons');
const loanRoutes = require('./routes/loans');

app.use('/api/books', bookRoutes);
app.use('/api/patrons', patronRoutes);
app.use('/api/loans', loanRoutes);

// Server start
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});