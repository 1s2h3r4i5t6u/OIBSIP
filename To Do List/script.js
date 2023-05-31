const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    newTask.addEventListener('click', completeTask);

    const deleteBtn = document.createElement('span');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = '';
  }
}

function completeTask(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
}
