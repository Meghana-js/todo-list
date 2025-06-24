script.js
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');

addTodoBtn.addEventListener('click', () => {
	const newTodo = document.createElement('li');
	newTodo.textContent = todoInput.value;
	todoList.appendChild(newTodo);
	todoInput.value = '';
});
