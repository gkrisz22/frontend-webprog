import express from 'express';
import dotenv from 'dotenv';
import turaRoute from './routes/tura.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // JSON-alapú kommunikációt kényszerít a kliensre és backendre

app.get('/', (req, res) => {
  const result = {
    success: true,
    message: "hello world"
  }

  res.send(result);
}); 

app.use("/api/tura", turaRoute);

try {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}
catch(error) {
  console.log(error);
}


