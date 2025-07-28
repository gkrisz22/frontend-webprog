import './style.css'

// Lekérjük az űrlapot, a beviteli mezőt, a listát és a törlés gombot az oldalról
const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;
const clearBtn = document.getElementById("clear-btn") as HTMLButtonElement;

// Egy teendő (todo) típusa: szöveg és elvégzett állapot
type Todo = {
  text: string;
  done: boolean;
};

// A teendők listáját betöltjük a localStorage-ból
let todos: Todo[] = loadTodos();

// Teendők mentése a localStorage-ba
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Teendők betöltése a localStorage-ból
function loadTodos(): Todo[] {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}

// Űrlap elküldésekor új teendő hozzáadása
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  todos.push({ text, done: false }); // Új teendő hozzáadása
  input.value = ""; // Beviteli mező ürítése
  renderTodos(); // Lista újrarajzolása
  saveTodos(); // Mentés
});

// Összes teendő törlése gomb eseménykezelője
clearBtn.addEventListener("click", () => {
  todos = [];
  renderTodos();
  saveTodos();
});

// Teendők megjelenítése a listában
function renderTodos() {
  list.innerHTML = ""; // Lista kiürítése

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.done) li.classList.add("done"); // Ha kész, stílus hozzáadása

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.classList.add("text");
    // Kattintásra elkészült állapot váltása
    span.addEventListener("click", () => {
      todos[index].done = !todos[index].done;
      renderTodos();
      saveTodos();
    });

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "✖";
    delBtn.className = "delete-btn";
    // Teendő törlése gomb eseménykezelője
    delBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos();
      saveTodos();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });

  /*
  In html it will look like this:
  <li>
    <span class="text">Teendő szövege</span>
    <button class="delete-btn">✖</button>
  </li>
  */
}

// Első megjelenítés
renderTodos();
