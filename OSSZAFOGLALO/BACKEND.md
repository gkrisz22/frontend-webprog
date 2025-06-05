# Express backend környezet beállítása

Ez a dokumentáció lépésről lépésre vezet végig egy egyszerű, modern JavaScript-alapú backend szerver elkészítésén az [Express](https://expressjs.com/) keretrendszer segítségével. Ideális kezdők számára.

---

## 1. Előkészületek

* Telepítsd a [Node.js](https://nodejs.org/) LTS verzióját.
* Ellenőrizd a terminálban:

```bash
node -v
npm -v
```

---

## 2. Projekt inicializálása

```bash
mkdir express-backend
cd express-backend
npm init -y
```

Majd a `package.json`-ban add meg:

```json
"type": "module",
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

---

## 3. Sükséges csomagok telepítése

```bash
npm install express dotenv
npm install -D nodemon
```

---

## 4. Szerverfájl létrehozása

Hozd létre a `server.js` fájlt:

```js
// server.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Root útvonal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API teszt útvonal
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Szerver indítás
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## 5. `.env` fájl létrehozása

```env
PORT=3000
```

---

## 6. Git ignore beállítás

`.gitignore` fájl a projekt gyökerében:

```
node_modules/
.env
```

---

## 7. Fejlesztési szerver indítása

```bash
npm run dev
```

---

## 8. Projekt GitHub-ról letöltése

```bash
git clone <repo-url>
cd <projekt-mappa>
npm install
```

Ezután hozz létre egy `.env` fájlt a gyökérben:

```
PORT=3000
```

Majd indítsd:

```bash
npm run dev
```

---

## 9. Hibakeresés

* Node.js telepítve?
* `.env` fájl létezik?
* Nincs elírás a `server.js`-ben?
* Ellenőrizd a portot: `http://localhost:3000`

---

Ez az Express-alapú backend kezdőbarát, gyorsan tanítható és könnyen bővíthető rendszer alapja.
