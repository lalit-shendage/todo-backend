const mongoose = require('mongoose');
require('dotenv').config(); 
user=process.env.USER;

mongoose.connect(`mongodb+srv://${user}@cluster0.dwnwv8t.mongodb.net/todo-mern`);

mongoose.connection.on('connected', () => {
  console.log('Connected to the database');
});

mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err);
});

module.exports = mongoose; // Export the connected mongoose object
