const todoForm = document.getElementById('todo-form');
const todoList = document.querySelector('.todoList');

// Retrieve todos from local storage or initialize an empty array
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render the initial todo list
renderTodos();

// Add event listener to the form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const done = false;
  if (title.trim() !== '') {
    const todo = { title, description, done };
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoForm.reset();
    renderTodos();
  }
});

// Function to make todo Item
function makeTodo(todo , index){
  const todoItem = document.createElement('div');
    todoItem.className = `${todo.done ? 'todoItemDone' : 'todoItem'}`;
    todoItem.innerHTML = `
      <span class="${todo.done ? 'done' : 'pending'}">${todo.done ? 'Done' : 'Pending'}</span>
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <div class="todoActionBtnContainer">
        <button class="todoActionBtn deleteBtn" onclick="removeTodo(${index})">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
          Delete
        </button>
        <button class="todoActionBtn doneBtn" onclick="toggleDone(${index})">
          ${todo.done ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>` : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg>`}
          ${todo.done ? 'Mark as Undone' : 'Mark as Done'}
        </button>
      </div>
    `;
    todoList.appendChild(todoItem);
}

// Function to render the todo Item into todo list
function renderTodos() {
  if(todoList.innerHTML = '' || !todos.length){
    todoList.innerHTML = `<div class = "noTodosDiv">No tasks yet !</div>`
  }
  else{
  todoList.innerHTML = '';
  todos.forEach(makeTodo);
  }
}
// Function to render pending todo Item into todo list
function renderPendingTodos() {
  if(todoList.innerHTML = '' || !todos.length || todos.filter(todo => todo.done === false).length === 0){
    todoList.innerHTML = `<div class = "noTodosDiv">No Pending tasks yet !</div>`
  }
  else{
    todoList.innerHTML = '';
    todos.filter(todo => todo.done === false).forEach(makeTodo);
  }
}
// Function to render Completed Todos into todo list
function renderCompletedTodos() {
  if(todoList.innerHTML = '' || !todos.length || todos.filter(todo => todo.done).length === 0){
    todoList.innerHTML = `<div class = "noTodosDiv">No Completed tasks yet !</div>`
  }
  else
  {
    todoList.innerHTML = '';
    todos.filter(todo => todo.done).forEach(makeTodo);
  }
}
// Function to remove a todo item
function removeTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

// Function to toggle the done flag of a todo item
function toggleDone(index) {
  todos[index].done = !todos[index].done;
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}