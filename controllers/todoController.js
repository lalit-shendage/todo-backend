const Todo = require('../models/todoModel'); 

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      completed: req.body.completed,
    });

    const savedTodo = await todo.save();
    res.status(201).send(savedTodo);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
};


// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(500).send(error);
  }
};


// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: req.params.id });
    if (!deletedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.status(204).send('Todo deleted');
  } catch (error) {
    res.status(500).send(error);
  }
};


