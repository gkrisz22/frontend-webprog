import './style.css'

type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

const _TODOS: Todo[] = [

];


function renderTodos() {
  const lista = document.getElementById('list') as HTMLUListElement;
  lista.innerHTML = '';
  _TODOS.forEach(todo => {

    const elem = `
      <li class="list-item" data-id="${todo.id}">

          <div class="list-item-text">
          <!--  sdasd -->
            <input class="chk-box" type="checkbox" ${todo.completed ? 'checked' : ''}>
            ${todo.title}
          </div>

          <div class="list-item-buttons">
            <button class="edit-btn">Szerkesztés</button>
            <button class="del-btn">Törlés</button>
          </div>

        </li>
    `;
    lista.innerHTML += elem;

  });
}


const form = document.getElementById('addForm') as HTMLFormElement;

form.addEventListener('submit', addNewTodo);

function addNewTodo(e: Event) {
  e.preventDefault();

  const title = document.getElementById('title') as HTMLInputElement;
 
  const newTodo: Todo = {
    id: _TODOS.length + 1,
    title: title.value,
    completed: false
  };

  _TODOS.push(newTodo);
  title.value = '';

  renderTodos();
  save();
}


function save() {
  localStorage.setItem('todos', JSON.stringify(_TODOS));
}

function load() {
  const data = localStorage.getItem('todos');
  if (data) {
    const todos = JSON.parse(data) as Todo[];
    _TODOS.push(...todos);
  }
}

// Delegation
const lista = document.querySelector('#list') as HTMLUListElement;


lista.addEventListener('click', (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('edit-btn')) {
    const li = target.closest('li') as HTMLLIElement;
    const id = li.getAttribute('data-id');

    const todo  = _TODOS.find(t => t.id === Number(id)); // referencia szerinti módosítás
    if (!todo) return;
    
    const newTitle = prompt('Új cím:', todo.title);
    console.log(newTitle);
    if (newTitle && newTitle.trim().length > 0) {
      todo.title = newTitle.trim();
      renderTodos();
    }
    save();
    
  } else if (target.classList.contains('del-btn')) {
    const li = target.closest('li') as HTMLLIElement;
    const id = li.dataset.id;
    
    const index = _TODOS.findIndex(t => t.id === Number(id));
      if (index != -1) {
        _TODOS.splice(index, 1);
        renderTodos();
      }
      save();
  }
  // Else if checkbox
  else if (target.classList.contains('chk-box')) {
    const li = target.closest('li') as HTMLLIElement;
    const id = li?.dataset.id;
    const todo = _TODOS.find(t => t.id === Number(id));
    if (!todo) return;
    todo.completed = (target as HTMLInputElement).checked;
    renderTodos();
    save();
  }
});

load();
renderTodos();