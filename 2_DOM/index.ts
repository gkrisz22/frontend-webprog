/*
    Feladat:
    
    Hozzunk létre egy túra megjelenítő alkalmazást a Vízi-Lovashoz!
    Egy túra egy div-ben jelenik meg, azon belül h3 címmel a túra neve, és egy p címmel a túra leírása. Alatta pedig egy p címmel a felnőtt és gyerek ár, és egy p címmel a kezdés és vége dátuma.
    A túrák adatai egy tömbben vannak tárolva, amit a turak változóban találunk.
    A túrák megjelenítése a displayTurak függvényben történik.
    
*/

type Tura = {
  id: number;
  nev: string;
  leiras: string;
  felnott_ar: number;
  gyerek_ar: number;
  kezdes: Date;
  vege: Date;
};

const turak: Tura[] = [
  {
    id: 1,
    nev: "Tavaszi tengerikajakozás a Bodrogzugban",
    leiras:
      "Kétnapos barangolás a Bodrogközben, a Tisza és a Bodrog által elöntött területen. A Bodrogzug fokozottan védett terület, amelynek látogatása engedélyköteles. Egyedülálló növény- és állatvilága, a vízi világ mozaikossága számunkra megunhatatlan látványosság.",
    felnott_ar: 39000,
    gyerek_ar: 28000,
    kezdes: new Date(2025, 5, 10),
    vege: new Date(2025, 5, 11),
  },
  {
    id: 2,
    nev: "Tésától a Dunáig! Ahol az uszály se jár! De a tengerikajak igen!",
    leiras:
      "Kétnapos nomád túra az Ipoly alsó szakaszán, amíg a Dunát el nem érjük. Nekünk ez hazai pálya, ezért is szeretjük annyira! A folyócska az alsó szakaszon lassan kanyarog, mielőtt a Dunába ömlene. A túra során sok apró surrantóval, zúgóval találkozunk, ami még élvezetesebbé teszi a hétvégét.",
    felnott_ar: 39000,
    gyerek_ar: 28000,
    kezdes: new Date(2025, 6, 21),
    vege: new Date(2025, 6, 22),
  },
];

// 1. feladat: Hozzunk létre egy függvényt, ami elkészíti a túra elemet!
// Hint: createElement, appendChild vagy insertBefore
function createTuraElement(tura: Tura): HTMLElement {
  // Hint: elemek létrehozása: div (ezen belül lesznek az adatok), h3, p
  // Hint: elemek összekapcsolása: appendChild (ügyeljünk a fastruktúrára)
  // Hint: visszatérési érték div
}

// 2. feladat: Hozzunk létre egy függvényt, ami megjeleníti az összes túrát!
// Hint: forEach az előző függvényre, és appendChild a bodyhoz, vagy egy div-hez

function displayAllTura(turak: Tura[]): void {
  // Hint: forEach
}

// Ez akkor szükséges, ha a script taget a head-ben helyezzük el, és a DOM még nincs betöltve, de kihagyható, ha a script taget a body végére tesszük.
document.addEventListener("DOMContentLoaded", () => {
  displayAllTura(turak);
});

/*
    MEGYJEGYZÉSEK:
    - Miért van a function createTuraElement(tura: Tura): HTMLElement { ... }     függvényben a : HTMLElement?
    Mert a függvény visszatérési értéke egy HTMLElement típusú elem lesz (nem kötelező megadni).

    Mintha Javaban: public HTMLElement createTuraElement(Tura tura) { ... } lenne.
*/
