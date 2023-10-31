const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const db = require('./db');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); 

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
