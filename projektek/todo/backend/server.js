// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const todos = [{
    id: 1,
    title: 'Todo 1',
    completed: false
}, {
    id: 2,
    title: 'Todo 2',
    completed: false
}];

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  todos[id] = updatedTodo;
  res.status(200).json(updatedTodo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos.splice(id, 1);
  res.status(204).send();
});

// Szerver indítás
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});