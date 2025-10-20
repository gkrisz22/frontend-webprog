// server.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware  - a kérést json formátumba alakítja
app.use(express.json());

// Root útvonal
// GET localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API teszt útvonal
// GET localhost:3000/api/v1/users
app.get('/api/v1/users', (req, res) => {
  res.json({ message: 'API is working!' });
});



const _STUDENTS = [];


/*
{
    id: 1,
    name: "Béla",
    absent: false,
}

GET     /api/students       : Az összes diák lekérdezése
---
POST    /api/students       : Új diák hozzáadása
{
    name: "Béla",
}
---
PUT     /api/students/:id   : Diák adatainak frissítése
---
PATCH   /api/students/:id   : Diák adatainak frissítése
---
DELETE  /api/students/:id   : Diák törlése
*/

// GET /api/students
app.get('/api/students', (req, res) => {
  res.json(_STUDENTS);
});


app.post("/api/students", (req, res) => {
    const { name } = req.body;

    if (!name || name == "") {
        let hiba = {
            error: "Név megadása kötelező!"
        }
        return res.status(400).json(hiba);
    }

    const newStudent = {
        id: _STUDENTS.length + 1,
        name, // name: name
        absent: true
    }
    _STUDENTS.push(newStudent);
    res.status(201).json(newStudent);
});

app.put("/api/students/:id", (req, res) => {
    const { id } = req.params; // const id = req.params.id;
    const { absent } = req.body;

    const studentIndex = _STUDENTS.findIndex(student => student.id === parseInt(id)); // Ha 2 ==, akkor 1 = "1"

    if (studentIndex === -1) {
        return res.status(404).json({ error: "Diák nem található!" });
    }

    if (absent !== undefined) {
        _STUDENTS[studentIndex].absent = absent; 
    }

    res.status(200).json(_STUDENTS[studentIndex]);
});

// Szerver indítás
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

