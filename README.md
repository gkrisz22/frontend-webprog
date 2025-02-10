---
title: Frontend webprogramozás
toc: true
---

# TypeScript alapok

## Környezet
#### Visual Studio Code
Az alábbi bővítményeket ajánlom a Frontend programozáshoz.

- Mithril Emmet (FallenMax)
- ES7+ React/Redux/React-Native snippets
- Live Server (Ritwick Dey)

#### NodeJS (https://nodejs.org/en)

Telepítés után: Parancssor / terminál / cmd.exe: 

```bash
node --version
v20.14.0 (a verzió, ami fel lett telepítve)
npm --version
10.9.1 (a verzió, ami fel lett telepítve)
 ```




<div class="page-break"></div>

## Egy új projekt

#### Állományok

1) Megnyitjuk a projekt mappáját (ha nincs, létrehozunk egyet).
![[Pasted image 20250210134236.png]]

2) Létrehozzuk a három fájlt: index.html, index.js, index.ts
![[Pasted image 20250210134406.png]]

3) HTML létrehozása, script (js) bekötése
![[Pasted image 20250210134544.png]]

#### npm (Node Package Manager)

Terminált nyitunk, majd a következőt írjuk be:
```bash
npm init # Hibát dob, ha a projekt mappája tartalmaz kötőjelet, ékezetet, nagybetűt. Ez jó: ez-egy-projekt 
```

TypeScript telepítése:
```bash
npm install typescript --save-dev
```

Szintén terminálba, miután egy TypeScript fájlt módosítottunk:
```bash
npx tsc index.ts
```

<div class="page-break"></div>

## Típusok és kifejezések


```typescript

let szam: number = 10;
let szoveg: string = "Hello, világ!";
let logikai: boolean = true;
let tomb: number[] = [1, 2, 3];  tomb.push(1)
let tuple: [string, number, boolean] = ["John", 25, true];
let barmi: any = "Bármi lehet";  

let alma:any = "alma"
alma = 2

if(valami)
{
	// "dsadasd"
	// 'asdasdsa'
	// `asdsadsad` (Alt Gr + 7)
	console.log(`Ez a ${szam} szam: asdsad`)
	var a = "valami"
}

console.log(a)
```

<div class="page-break"></div>

## Aritmetikai, értékadó, relációs, logikai, elérési operátorok és azok precedenciája

```typescript

let a: number = 10;
let b: number = 20;
let c: number = a + b;
let d: number = a * b;
let e: boolean = a < b;
let f: boolean = a == b;
let g: boolean = a && b;
let h: number = a++;
let i: number = a--;
let j: number = a += b; // a = a + b
let k: number = a -= b; // a = a - b
let l: number = a *= b; // a = a * b
let m: number = a /= b; // a = a / b
let n: number = a % b;
let o: number = a ** b; // a^b
let r: number = a ^ b; // XOR
let v: number = a instanceof b;
let w: number = a in b; // b-ben van-e a
let x: number || undefined = a || b; // ha a hamis, akkor b
let y: number = a ? b : c; // ha a igaz, akkor b, különben c


class A {}

class B extends A {

}

const a = A();
const b = B();

b instanceof a

```

<div class="page-break"></div>

## Változók, láthatóság

```typescript

var globalVar = "Global"; // Globális
let blockScoped = "Block"; // Blokkon belüli
const immutable = "Cannot change"; // Nem módosítható

type Szemely = {
	nev: string;
	kor: number;
}

interface ISzemely {
	nev: string;
	kor: number;
}


const a: {adsasd: number, }

const szemely: ISzemely[] = 
[
	{
		nev: "Valaki",
		kor: 30
	},
	{
		nev: "Valaki2",
		kor: 25
	}
]

const data:ISzemely = {
	nev: document.querySelector("input").innerHTML,
	
}

szemely.push(data)




JSON.stringify(szemely)
JSON.parse()

szemely.nev
szemely.kor

if (true) {
    let blockVar = "Inside block";
    console.log(blockVar); // OK
}

// console.log(blockVar); // HIBA: nem elérhető

```


```typescript

var a = 5;
if (true) {
    var a = 10; // Ugyanazt a változót módosítja!
}
console.log(a); // 10

let b = 5;
if (true) {
    let b = 10; // Külön változó
}

console.log(b); // 5
const c:number = 20;
// c = 25; // HIBA: a `const` nem módosítható

```


<div class="page-break"></div>

## Of, while, for, for in, for of, switch, try catch, throw, break

```typescript

// For ciklus

for (let i = 0; i < 5; i++) {
    console.log(i);
}

  

// While ciklus

let j = 0;

while (j < 3) {
    console.log(j);
    j++;
}

  <!--  asdsad -->

// For-in (objektumokhoz)

let obj = { name: "John", age: 30 };

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

  

// For-of (tömbökhöz)

let arr = ["alma", "körte", "banán"];

for (let gyumolcs of arr) {
    console.log(gyumolcs);
}

  

// Switch-case

let szin = "piros";

switch (szin) {
    case "piros":
        console.log("Stop!");
        break;
    case "zöld":
        console.log("Mehetsz!");
        break;
    default:
        console.log("Figyelj!");

}

  

// Try-catch

try {
    throw new Error("Hiba történt!");
} catch (error) {
    console.log(error.message);
}

```


<div class="page-break"></div>

## Függvények

```typescript
function osszead(a: number, b: number): number {
    return a + b;
}


const kivon = (a: number, b: number): number => a - b;

console.log(osszead(5, 3)); // 8
console.log(kivon(5, 3)); // 2

```

<div class="page-break"></div>

## Class

```typescript
class Ember {
    nev: string;
    eletkor: number;
  
    constructor(nev: string, eletkor: number) {
        this.nev = nev;
        this.eletkor = eletkor;
    }

    koszont() {
        console.log(`Szia, ${this.nev} vagyok!`);
    }

}
  
const ember = new Ember("Péter", 25);
ember.koszont();

```

<div class="page-break"></div>

## DOM elemek létrehozása, attribútum módosítás
```typescript

// Új elem létrehozása
let p = document.createElement("p");
p.textContent = "Ez egy bekezdés";
document.body.appendChild(p);
// Elemek kiválasztása

let cim = document.querySelector("h1");
console.log(cim?.textContent);

// Attribútum módosítása

let link = document.querySelector("a");
link?.setAttribute("href", "https://google.com");
```

<div class="page-break"></div>

## Aszinkron futás és callback-ek (setTimeout, event listeners)

```typescript
// setTimeout

setTimeout(() => {
    console.log("Ez 1 másodperc múlva jelenik meg!");
}, 1000);

  

// Event listener

document.querySelector("button")?.addEventListener("click", () => {
    console.log("Gombra kattintottál!");
});

  

// Aszinkron függvény

function aszinkronFuggveny(callback: () => void) {
    setTimeout(() => {
        callback(); // itt lenne: console.log("letelt a 2 másodperc");
    }, 2000);
}

aszinkronFuggveny(() => {
 // Ez a callback törzse
 console.log("letelt a 2 másodperc"); // Ez mintha ^
});
```

<div class="page-break"></div>

## Promise

```typescript

// A `.then()` módszerrel láncolhatjuk a Promise műveleteket, így ha egy aszinkron művelet befejeződik, akkor annak eredményével dolgozhatunk tovább:

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Adatok sikeresen betöltve!");
    }, 2000); // 2 másodperc után teljesül a Promise
  });
}

console.log("Lekérdezés indítása...");

fetchData()
  .then((result) => {
    console.log("Eredmény:", result);
  })
  .catch((error) => {
    console.error("Hiba történt:", error);
  });

console.log("Ez a sor előbb fut le, mert a Promise aszinkron.");
```

**Magyarázat:**

- A `fetchData()` egy `Promise<string>` típusú függvény, amely 2 másodperc után sikeresen teljesül.
- A `.then()` kezeli a sikeres teljesülést, és kiírja az eredményt.
- A `.catch()` az esetleges hibák elkapására szolgál.
- A konzolon azonnal megjelenik az utolsó `console.log()`, mert a Promise aszinkron működik.

** Async-await **
```typescript
async function loadData() {
  try {
    console.log("Lekérdezés indítása...");
    const result = await fetchData(); // ez a Promise függvény fentebbről
    console.log("Eredmény:", result);
  } catch (error) {
    console.error("Hiba történt:", error);
  }
}

loadData();
console.log("Ez a sor előbb fut le, mert a loadData() aszinkron.");
```

<div class="page-break"></div>

## AJAX

Inkább a fetch-es megoldás az elterjedtebb.

```typescript

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = () => {
    if (xhr.status == 200) {
        let posts = JSON.parse(xhr.responseText);
        console.log(posts);
    }
};
xhr.send();

```

- Fetch függvény

```typescript

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => console.log(posts));

```

- JSON.parse, JSON.stringify

```typescript

let obj = { name: "John", age: 30 };
let json = JSON.stringify(obj);
console.log(json);

let obj2 = JSON.parse(json);
console.log(obj2);

```

- POST data,

- Headers

```typescript

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 })
})
    .then(response => response.json())
    .then(post => console.log(post));

```

- HTTP státuszkódok kezelése

```typescript

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error("Hiba történt!");
        }
    })
    .then(post => console.log(post))
    .catch(error => console.log(error.message));
```

- HTTP methodok kezelése

```typescript

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
    .then(response => {
        if (response.status == 200) {
            console.log("Sikeres törlés!");
        } else {
            throw new Error("Hiba történt!");
        }
    })
    .catch(error => console.log(error.message));
```

- API-kulcsok

```typescript

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));

// Authorization header
fetch("https://api.example.com/data", {
    headers: {
        "Authorization": `Bearer ${API_KEY}`
    }
});
