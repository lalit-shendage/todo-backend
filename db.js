const mongoose = require('mongoose');
require('dotenv').config(); 


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log('Connected to the database');
});

mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err);
});

module.exports = mongoose; 
