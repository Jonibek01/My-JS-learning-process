// Take todos array and todosId from local storage
var todos = JSON.parse(localStorage.getItem('todos')) || [];

var todoId = Number(localStorage.getItem('todoCounter'));

//Completed and uncompleted tasks array
var completedTasks = [];
var uncompletedTasks = [];

//Chosing elements
var elTodoForm = $_('.js-task-form');
var elTodoInput = $_('.js-task-input', elTodoForm);
var elTodoList = $_('.js-tasks-list');
var elTodoTamplate = $_('#task-template').content;
var elTodosFooter = $_('.js-todos-footer');
var elRemainedTasks = $_('.js-remained-tasks', elTodosFooter);

//Choosing filter buttons
var elFilterButtonsWrapper = $_('.js-filter-buttons');
var elShowAllTasksBtn = $_('.js-show-all-button', elFilterButtonsWrapper);
var elShowActiveTasksBtn = $_('.js-show-active-button', elFilterButtonsWrapper);
var elShowCompletedTasksBtn = $_('.js-show-completed-button', elFilterButtonsWrapper);
var elClearCompletedBtn = $_('.js-clear-completed-btn', elFilterButtonsWrapper);


// ===================================
//       FUNCTIONS
// ===================================

var separateCompletedAndUncompleted = function () {
  completedTasks = [];
  uncompletedTasks = [];

  todos.forEach(function (todo) {
    if (todo.completed) {
      completedTasks.push(todo);
    } else {
      uncompletedTasks.push(todo);
    }
  });
}

// Update left tasks number funtion
var updateLeftTasksNumber = function () {
  separateCompletedAndUncompleted();
  elRemainedTasks.textContent = uncompletedTasks.length;
}

//Push todo to todos array function
var pushTodo = function (todo) {
  todos.push({
    task: todo,
    completed: false,
    id: ++todoId
  });
}

// Create todo Element
var createTodoElement = function (todo) {
  var newTodoElement = elTodoTamplate.cloneNode(true);

  $_('.js-task-content', newTodoElement).textContent = todo.task;
  $_('.js-is-completed-checkbox', newTodoElement).dataset.todoId = todo.id;
  $_('.js-is-completed-checkbox', newTodoElement).checked = todo.completed;
  $_('.js-remove-task-btn', newTodoElement).dataset.todoId = todo.id;

  if (todo.completed) {
    $_('.js-task-list-item', newTodoElement).classList.add('completed-task');
  }

  return newTodoElement;
}

//RenderTodos function
var renderTodos = function (todos) {
  elTodoList.innerHTML = '';
  elTodosFragment = document.createDocumentFragment();

  todos.forEach(function (todo) {
    elTodosFragment.appendChild(createTodoElement(todo));
  });

  elTodoList.appendChild(elTodosFragment);

  if (todos.length !== 0) {
    elTodosFooter.classList.remove('d-none');
    elTodosFooter.classList.add('d-flex');
  }
}

//Clear to do input value function
var clearTodoInputValue = function () {
  elTodoInput.value = '';
}

//Update local todos
var updateLocalTodos = function () {
  localStorage.setItem('todos', JSON.stringify(todos));
}

//Update local todoId
var updateLocalTodoId = function () {
  localStorage.setItem('todoCounter', todoId);
}

// Listen to submit event of form function
var onFormSubmit = function (evt) {
  evt.preventDefault();

  // Take value of todo input
  var todoInputValue = elTodoInput.value.trim();

  // Check todo input value isn't empty
  if (!todoInputValue) {
    alert('Iltimos, vazifani kiriting!!');
    return;
  }

  //Push todo to todos array
  pushTodo(todoInputValue);

  //Render todos
  renderTodos(todos);

  //Clear todo Input value after rendering todos
  clearTodoInputValue();

  //Update local Todos and todoId
  updateLocalTodos();
  updateLocalTodoId();

  updateLeftTasksNumber();
}


// ===============================
// LISTEN TO EVENTS
// ===============================

elTodoForm.addEventListener('submit', onFormSubmit);

elTodoList.addEventListener('click', function (evt) {
  if (evt.target.matches('.js-remove-task-btn')) {
    var removedTodoId = Number(evt.target.dataset.todoId);

    var todoIndex = todos.findIndex(function (todo) {
      return todo.id === removedTodoId;
    });

    evt.target.closest('.tasks-li').remove();
    todos.splice(todoIndex, 1);
    updateLocalTodos();
    updateLeftTasksNumber();
  }

  if (evt.target.matches('.js-is-completed-checkbox')) {
    var completedTodoId = Number(evt.target.dataset.todoId);

    var completedTodo = todos.find(function (todo) {
      if (todo.id === completedTodoId) {
        todo.completed = !todo.completed;
      }
    });

    evt.target.closest('.js-task-list-item').classList.toggle('completed-task');

    updateLocalTodos();
    updateLeftTasksNumber();
  }
});

// Filter tasks
elShowAllTasksBtn.addEventListener('click', function () {
  renderTodos(todos);
});

elShowCompletedTasksBtn.addEventListener('click', function () {
  renderTodos(completedTasks);
});

elShowActiveTasksBtn.addEventListener('click', function () {
  renderTodos(uncompletedTasks);
});

elClearCompletedBtn.addEventListener('click', function () {
  completedTasks.forEach(function (completedTask) {
    var todoIndex = todos.findIndex(function (todo) {
      return todo.id === completedTask.id;
    });

    todos.splice(todoIndex, 1);
  });

  completedTasks = [];
  renderTodos(completedTasks);
  updateLocalTodos();
});


//Show all todos by taking from localStorage
renderTodos(todos);
updateLeftTasksNumber();
