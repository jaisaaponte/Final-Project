const todoList = [];

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoUl = document.querySelector('#todo-list');

todoForm.addEventListener('submit', function(event) {
	event.preventDefault();
	addTodo();
});

function addTodo() {
	const todoText = todoInput.value.trim();

	if(todoText !== '') {
		const todo = createTodoObject(todoText);
		todoList.push(todo);
		displayTodoList();
		todoInput.value = '';
	}
}

function createTodoObject(todoText) {
	return { text: todoText, complete: false };
}

function displayTodoList() {
	todoUl.innerHTML = '';

	todoList.forEach(function(todo, index) {
		const todoLi = document.createElement('li');
		const todoCheck = document.createElement('button');
		const todoDelete = document.createElement('button');

		todoCheck.textContent = '✓';
		todoCheck.classList.add('todo-check');
		todoCheck.addEventListener('click', function() {
			toggleTodoComplete(index);
		});

		todoDelete.textContent = 'X';
		todoDelete.classList.add('todo-delete');
		todoDelete.addEventListener('click', function() {
			deleteTodo(index);
		});

		if(todo.complete) {
			todoLi.classList.add('complete');
		}

		todoLi.textContent = todo.text;
		todoLi.appendChild(todoCheck);
		todoLi.appendChild(todoDelete);
		todoUl.appendChild(todoLi);
	});
}

function toggleTodoComplete(index) {
	todoList[index].complete = !todoList[index].complete;
	displayTodoList();
}

function deleteTodo(index) {
	todoList.splice(index, 1);
	displayTodoList();
}