import './style.css'

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const API_URL = 'http://localhost:3100/todos';

// DOM elemek lekérése
const form = document.getElementById('form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const list = document.getElementById('list') as HTMLUListElement;

// Űrlap kezelése új todo hozzáadásához
form.addEventListener('submit', async(e) => {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    title: title.value,
    completed: false
  };
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  });
  title.value = '';
  renderTodos();
});

// Event delegation - egyetlen event listener az összes gombhoz
list.addEventListener('click', async (e) => {
  const target = e.target as HTMLElement;
  const todoItem = target.closest('.todo-item') as HTMLElement;
  if (!todoItem) return;
  
  const index = Array.from(list.children).indexOf(todoItem);
  const todoTitle = todoItem.querySelector('.todo-text')?.textContent || '';
  
  // Szerkesztés gomb kezelése
  if (target.classList.contains('edit-btn')) {
    await updateTodo(index, todoTitle);
  }
  
  // Törlés gomb kezelése
  if (target.classList.contains('delete-btn')) {
    if (confirm(`Biztosan törölni szeretnéd: "${todoTitle}"?`)) {
      await deleteTodo(index);
    }
  }
});

// Event delegation - checkbox állapot váltás kezelése
list.addEventListener('change', async (e) => {
  const target = e.target as HTMLInputElement;
  if (target.type === 'checkbox' && target.classList.contains('todo-checkbox')) {
    const todoItem = target.closest('.todo-item') as HTMLElement;
    if (!todoItem) return;
    
    const index = Array.from(list.children).indexOf(todoItem);
    const todoTitle = todoItem.querySelector('.todo-text')?.textContent || '';
    const todoId = parseInt(todoItem.dataset.id || '0');
    
    const todo: Todo = {
      id: todoId,
      title: todoTitle,
      completed: !target.checked // A jelenlegi állapot ellentéte lesz az új állapot
    };
    
    await toggleTodoComplete(index, todo);
  }
});

// Függvény todo törlésére
async function deleteTodo(todoIndex: number) {
  try {
    const response = await fetch(`${API_URL}/${todoIndex}`, {
      method: 'DELETE'
    });
    
    if (response.ok) {
      renderTodos(); // Lista frissítése törlés után
    } else {
      console.error('Todo törlése sikertelen');
    }
  } catch (error) {
    console.error('Hiba a todo törlése során:', error);
  }
}

// Függvény todo címének módosítására
async function updateTodo(todoIndex: number, currentTitle: string) {
  // Új cím bekérése a felhasználótól
  const newTitle = prompt('Todo szerkesztése:', currentTitle);
  
  // Ha a felhasználó lemondta vagy üres stringet adott meg, ne frissítsük
  if (newTitle === null || newTitle.trim() === '') {
    return;
  }
  
  try {
    const updatedTodo = {
      id: Date.now(), // Megjegyzés: Ez ideálisan az eredeti ID-vel egyezne meg
      title: newTitle.trim(),
      completed: false
    };
    
    const response = await fetch(`${API_URL}/${todoIndex}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    });
    
    if (response.ok) {
      renderTodos(); // Lista frissítése módosítás után
    } else {
      console.error('Todo frissítése sikertelen');
    }
  } catch (error) {
    console.error('Hiba a todo frissítése során:', error);
  }
}

// Függvény todo befejezettség állapotának váltására
async function toggleTodoComplete(todoIndex: number, todo: Todo) {
  try {
    const updatedTodo = {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed // Állapot váltása
    };
    
    const response = await fetch(`${API_URL}/${todoIndex}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    });
    
    if (response.ok) {
      renderTodos(); // Lista frissítése állapot váltás után
    } else {
      console.error('Todo állapot váltása sikertelen');
    }
  } catch (error) {
    console.error('Hiba a todo állapot váltása során:', error);
  }
}

// Függvény az összes todo megjelenítésére
async function renderTodos() {
  try {
    const response = await fetch(API_URL);
    const todos = await response.json();
    
    // HTML template generálása minden todo-hoz - CLEAN, no inline handlers!
    list.innerHTML = todos.map((todo: Todo, index: number) => `
      <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
        <div class="todo-left">
          <input 
            type="checkbox" 
            class="todo-checkbox" 
            ${todo.completed ? 'checked' : ''}
          />
          <span class="todo-text">${todo.title}</span>
        </div>
        <div class="todo-buttons">
          <button class="edit-btn">Szerkesztés</button>
          <button class="delete-btn">Törlés</button>
        </div>
      </li>
    `).join('');
    
  } catch (error) {
    console.error('Hiba a todok betöltése során:', error);
    list.innerHTML = '<li>Hiba a todok betöltésekor</li>';
  }
}

// Todok betöltése az oldal indításakor
renderTodos();