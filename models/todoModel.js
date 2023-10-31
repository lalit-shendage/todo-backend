const mongoose = require('../db'); 

const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema); 
