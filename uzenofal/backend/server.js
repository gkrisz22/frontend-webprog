// server.js
// 1. Importáljuk az express-t és dotenv-t
import express from "express"; // Webszerver keretrendszer
import dotenv from "dotenv"; // Környezeti változók kezelése, pl PORT

// 2. Környezeti változók betöltése
dotenv.config();

// 3. Express alkalmazás létrehozása
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // JSON alapú kommunikációt tesz lehetővé

// ===========================================================
// 4. Első útvonal definiálása: GET http://localhost:PORT/
app.get("/", (req, res) => {
  console.log("Megnézted a főoldalt!");
  res.send("Hello World!");
});

// GET http://localhost:PORT/api
app.get("/api", (req, res) => {
  console.log("API elérve!");
  res.json({ message: "API is working!" });
});
// ===========================================================

// 5. Szerver indítása
app.listen(PORT, () => {
  console.log(`A szerver itt fut: http://localhost:${PORT}`);
});
