# Frontend környezet beállítása Vite segítségével (HTML + CSS + TypeScript)

Ez az útmutató egy modern frontend fejlesztési környezetet mutat be, a [Vite](https://vitejs.dev/) eszközzel.

---

## 1. Előkészületek

Győződj meg róla, hogy a számítógépedre telepítve van:

* [Node.js](https://nodejs.org/) (ajánlott: LTS verzió)

Ellenőrzés parancssorban:

```bash
node -v
npm -v
```

---

## 2. Új Vite projekt létrehozása

```bash
npm create vite@latest frontend -- --template vanilla-ts
cd frontend
npm install
```

Ez létrehoz egy `frontend` nevű mappát, TypeScript támogatással.

---

## 3. Fájlok magyarázata

* `index.html`: belépési pont (a `public` mappában vagy a gyökérben található)
* `main.ts`: itt indul el a JavaScript/TypeScript kód
* `style.css`: ide kerül a stílus

---

## 4. Példa fájlok tartalma

* `index.html`:

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Frontend Projekt</title>
  </head>
  <body>
    <h1>Üdvözöl a Frontend Projekt Vite-tel!</h1>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

* `src/style.css`:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
}
h1 {
  color: #4CAF50;
}
```

* `src/main.ts`:

```ts
import './style.css';

console.log('Helló Vite + TypeScript világa!');
```

---

## 5. Fejlesztői szerver indítása

```bash
npm run dev
```

Ez elindítja a fejlesztői szervert, és automatikusan megnyitja a böngészőt. Mentés után automatikusan frissül az oldal.

---

## 6. Projekt buildelése (statikus fájlok generálása)

```bash
npm run build
```

A build után a statikus fájlokat a `dist/` mappában találod.

---

## 7. Projekt feltöltése Apache szerverre

1. Futtasd: `npm run build`
2. Másold fel a `dist/` mappa teljes tartalmát az Apache webszerver könyvtárába (pl. `/var/www/html/`)
3. A weboldalad elérhető lesz böngészőből, pl.: `http://szervered.hu/`

---

## 8. Extra: favicon, külön CSS fájl, DOM manipuláció stb.

Ezek egyszerűen hozzáadhatók, a Vite gondoskodik az automatikus frissítésről és kompatibilitásról.

---

Ez a Vite-alapú megoldás modern, gyors és kezdőbarát környezetet biztosít a frontend tanításához.


# Tananyag

```typescript

// Frontend - TypeScript példák

// Típusok és kifejezések
let szam: number = 10;
let nev: string = "Anna";
let aktiv: boolean = true;

// Alapvető típusok
let lista: number[] = [1, 2, 3];
let obj: { nev: string, kor: number } = { nev: "Péter", kor: 16 };
let halmaz: Set<number> = new Set([1, 2, 3]);
let terkep: Map<string, number> = new Map([["egy", 1]]);
let isTrue: boolean = false;
let u: undefined = undefined;
let n: null = null;

// Operátorok
let eredmeny = 5 + 3;              // Aritmetikai
let x = 10; x += 2;                // Értékadó
let nagyobb = 10 > 5;              // Relációs
let igaz = true && false;          // Logikai
let nev2 = obj?.nev;                // Elérési

// Változók
var regi = "régi";
let uj = "új";
const allando = "nem változik";

// Láthatóság
{
  let lokal = "csak itt látszik";
  console.log(lokal);
}

// Vezérlési szerkezetek
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let lista2 = [1, 2, 3];
for (let szam of lista2) {
  console.log(szam);
}

let obj2 = { a: 1, b: 2 };
for (let kulcs in obj2) {
  console.log(kulcs, obj2[kulcs]);
}

// Függvények
function osszead(a: number, b: number): number {
  return a + b;
}

// Math, console
console.log(Math.sqrt(16));
console.log("Üdv a konzolban!");

// Class, objektum, konstruktor
class Ember {
  nev: string;
  constructor(nev: string) {
    this.nev = nev;
  }
}
let e = new Ember("János");

// Object.create, Prototype
let allat = {
  hang: function () {
    console.log("hang");
  }
};

let kutya = Object.create(allat);
kutya.hang();

// Window, location, document
console.log(window.innerWidth);
console.log(location.href);
console.log(document.title);

// DOM: létrehozás, módosítás, eltávolítás
let ujElem = document.createElement("p");
ujElem.textContent = "Új bekezdés";
document.body.appendChild(ujElem);
document.body.removeChild(ujElem);

// Attribútumok módosítása
let gomb = document.getElementById("gomb");
gomb?.setAttribute("disabled", "true");
gomb?.removeAttribute("disabled");

// Aszinkron futás, callback
setTimeout(() => {
  console.log("3 másodperc múlva");
}, 3000);

document.addEventListener("click", () => {
  console.log("Kattintottál!");
});

// Promise, async/await
function betolt(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Kész"), 1000);
  });
}

async function futtat() {
  let eredmeny = await betolt();
  console.log(eredmeny);
}

futtat();


```

## AJAX

### Mi az az AJAX?

Az AJAX egy technika, amivel JavaScript segítségével adatokat tudunk lekérni vagy küldeni a háttérben anélkül, hogy újratöltenénk az oldalt.

Képzeld el, hogy van egy weboldalad, és rá akarsz kattintani egy gombra, hogy új adatokat töltsön be. AJAX segítségével ezt úgy lehet megoldani, hogy az oldal nem frissül újra, csak az adatok változnak.

---

### 1. Példa: XHR (XMLHttpRequest) használata

```ts
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr.onload = function () {
  if (xhr.status === 200) {
    const adat = JSON.parse(xhr.responseText);
    console.log(adat);
  }
};

xhr.send();
```

**Magyarázat**:

* `open("GET", URL)`: megadja, milyen módszerrel (GET) és honnan (URL) kérjük le az adatot.
* `onload`: akkor fut le, amikor megérkezik a válasz.
* `JSON.parse()`: átalakítja a szöveget használható objektummá.

---

## 2. Példa: Fetch API használata (ez az újabb módszer)

```ts
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(valasz => valasz.json())
  .then(adat => console.log(adat));
```

**Magyarázat**:

* `fetch`: egy beépített függvény, ami lekéri az adatot.
* `valasz.json()`: szintén szövegből objektumot csinál.
* `then()`: akkor fut le, ha megjött a válasz.

---

## 3. Példa: Adatküldés (POST kérés)

```ts
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Teszt bejegyzés",
    body: "Ez egy próba.",
    userId: 1
  })
})
  .then(valasz => valasz.json())
  .then(adat => console.log(adat));
```

**Magyarázat**:

* `method: "POST"`: most adatot küldünk.
* `headers`: megmondjuk, hogy JSON-t küldünk.
* `body`: itt van maga az adat.

---

## 4. JSON.parse és JSON.stringify

```ts
const szoveg = '{"nev": "Anna", "kor": 17}';
const obj = JSON.parse(szoveg);
console.log(obj.nev);

const ujSzoveg = JSON.stringify(obj);
console.log(ujSzoveg);
```

**Magyarázat**:

* `JSON.parse()`: szövegből objektum.
* `JSON.stringify()`: objektumból szöveg.

---

## 5. HTTP státuszkódok röviden

* 200: OK, minden rendben
* 201: Sikeres létrehozás (POST után)
* 404: Nem található
* 500: Szerverhiba

---

## 6. HTTP metódusok

* **GET**: adat lekérése
* **POST**: új adat küldése
* **PUT**: teljes adat módosítása
* **DELETE**: adat törlése

---

## 7. API kulcsok

Néhány weboldal vagy szolgáltatás megköveteli, hogy használjunk egy kulcsot, hogy azonosítsanak minket. Ezt általában a kérés fejlécéhez adjuk hozzá.

```ts
fetch("https://api.valami.hu", {
  headers: {
    "Authorization": "Bearer SAJAT_API_KULCS"
  }
});
```

---

Ha szeretnéd, hozzá tudunk adni interaktív gyakorlatokat vagy hibakeresős példákat is!


# Tesztkérdések
# Frontend tesztkérdések középiskolásoknak

## ✅ 1. Feleletválasztós kérdések

**1. Melyik változót nem lehet újra értékül adni?**

A) `let`
B) `var`
C) `const`
D) egyik sem

---

**2. Mi lesz a következő kód kimenete?**

```ts
console.log(typeof "hello");
```

A) `string`
B) `text`
C) `String`
D) `"hello"`

---

**3. Melyik NEM típus a TypeScript-ben?**
A) `string`
B) `number`
C) `bool`
D) `undefined`

---

**4. Melyik metódus változtat meg egy DOM elemet?**
A) `appendChild()`
B) `getElementById()`
C) `setTimeout()`
D) `JSON.stringify()`

---

## ✅ 2. Igaz / Hamis kérdések

**1. A `const` kulcsszóval létrehozott változót meg lehet változtatni.**

**2. A `for...of` ciklust tömbökön használjuk.**

**3. A `JSON.parse()` szöveget alakít objektummá.**

**4. A `document.createElement()` töröl egy HTML elemet.**

---

## ✅ 3. Kódrészlet-elemzés

**Mit ír ki a konzol?**

```ts
let x = 5;
if (x > 3) {
  console.log("Nagyobb");
} else {
  console.log("Kisebb");
}
```

---

**Mit tesz ez a kódrészlet?**

```ts
document.getElementById("gomb")?.setAttribute("disabled", "true");
```

---

## ✅ Megoldások

**1. Feleletválasztós kérdések**
1: C
2: A
3: C
4: A

**2. Igaz / Hamis**
1: Hamis
2: Igaz
3: Igaz
4: Hamis

**3. Kódrészlet-elemzés**

* Konzol kimenet: "Nagyobb"
* DOM példa: Megkeresi a `gomb` azonosítójú elemet, és letiltja (disabled)
