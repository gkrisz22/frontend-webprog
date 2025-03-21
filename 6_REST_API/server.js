import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT; 

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});