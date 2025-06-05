# Git és GitHub bevezetés

Ez az útmutató segít eligazodni a Git verziókövető rendszer és a GitHub távoli tárhely alapvető használatában.

---

## 1. Git telepítése

* Töltsd le innen: [https://git-scm.com/](https://git-scm.com/)
* Telepítés után ellenőrizd terminálban:

```bash
git --version
```

---

## 2. Git konfigurálás (csak egyszer kell)

```bash
git config --global user.name "Saját Név"
git config --global user.email "email@pelda.com"
```

---

## 3. Git tárhely inicializálása egy mappában

```bash
cd projekt-mappa
git init
```

Ez létrehozza a `.git` mappát, ahol a verziók tárolódnak.

---

## 4. `.gitignore` létrehozása

```bash
echo node_modules/ > .gitignore
echo .env >> .gitignore
```

Ez megakadályozza, hogy fölösleges vagy titkos fájlok kerüljenek a tárhelyre.

---

## 5. Változások elmentése

```bash
git add .            # minden fájl hozzáadása
git commit -m "Első commit"
```

---

## 6. GitHub repo létrehozása

1. Nyisd meg: [https://github.com](https://github.com)
2. Jelentkezz be vagy regisztrálj
3. Kattints a "+" ikonra és „New repository”
4. Add meg a nevét (pl. `frontend-projekt`) és hozd létre

---

## 7. GitHub repo összekapcsolása lokális mappával

```bash
git remote add origin https://github.com/felhasznalonev/repo-nev.git
git branch -M main
git push -u origin main
```

Ez feltölti a projekted a GitHub-ra.

---

## 8. Módosítások frissítése GitHub-on

```bash
git add .
git commit -m "Módosítottam valamit"
git push
```

---

## 9. Projekt letöltése GitHub-ról

```bash
git clone https://github.com/felhasznalonev/repo-nev.git
cd repo-nev
```

---

## 10. Hasznos parancsok áttekintése

| Parancs               | Jelentés                                    |
| --------------------- | ------------------------------------------- |
| `git status`          | Megnézi, mi változott                       |
| `git log`             | Megnézi a korábbi mentéseket                |
| `git diff`            | Megnézi a változtatásokat                   |
| `git checkout <fájl>` | Fájl visszaállítása utolsó mentésre         |
| `git pull`            | Frissítés a GitHub-on történt változásokkal |

---

## 11. GitHub Desktop használata (grafikus megoldás)

### Telepítés

* Töltsd le: [https://desktop.github.com/](https://desktop.github.com/)
* Telepítsd, majd jelentkezz be a GitHub fiókoddal

### Új repository létrehozása

1. Kattints: `File` → `New repository`
2. Add meg a projekt nevét, helyét, és válaszd ki a `.gitignore` sablont
3. Kattints `Create repository`

### Létező projekt hozzáadása

1. Kattints: `File` → `Add Local Repository`
2. Válaszd ki a projekt mappáját, amely már tartalmaz `.git` mappát

### Változások elmentése

1. A változások automatikusan megjelennek a bal oldali listában
2. Írj egy commit üzenetet, majd kattints `Commit to main`

### Feltöltés GitHub-ra

1. A jobb felső sarokban kattints `Publish repository`
2. Válaszd ki, hogy privát vagy nyilvános legyen-e

### Frissítések letöltése

* Kattints a `Fetch origin` gombra a változások letöltéséhez

---
