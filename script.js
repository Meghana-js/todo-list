const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');

addTodoBtn.addEventListener('click', () => {
    const newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    newTodo.style.transform = 'rotateY(0deg)';
    newTodo.style.transition = 'transform 0.5s';
    todoList.appendChild(newTodo);
    setTimeout(() => {
        newTodo.style.transform = 'rotateY(360deg)';
    }, 100);
    todoInput.value = '';
});
