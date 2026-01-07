const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskDatetime = document.getElementById("task-datetime");
const taskList = document.getElementById("task-list");

let tasks = [];

// Function to add a new task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskTime = taskDatetime.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const newTask = {
    text: taskText,
    datetime: taskTime,
    completed: false
  };

  tasks.push(newTask);
  refreshTasks();

  // Clear inputs
  taskInput.value = "";
  taskDatetime.value = "";
});

// Function to re-render all tasks
function refreshTasks() {
  taskList.innerHTML = ""; // Clear list
  tasks.forEach((task, index) => {
    renderTask(task, index);
  });
}

// Function to render a single task
function renderTask(task, index) {
  const li = document.createElement("li");
  li.className = "task-item";
  if (task.completed) li.classList.add("completed");

  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.innerText = task.datetime
    ? `${task.text} (${new Date(task.datetime).toLocaleString()})`
    : task.text;

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "task-buttons";

  const completeBtn = document.createElement("button");         // complete button 
  completeBtn.innerText = "✔";
  completeBtn.addEventListener("click", () => {
    tasks[index].completed = !tasks[index].completed;
    refreshTasks();
  });

  const deleteBtn = document.createElement("button");           // delete button
  deleteBtn.innerText = "🗑";
  deleteBtn.addEventListener("click", () => {
    tasks.splice(index, 1);
    refreshTasks();
  });

  buttonDiv.appendChild(completeBtn);
  buttonDiv.appendChild(deleteBtn);

  li.appendChild(textSpan);
  li.appendChild(buttonDiv);

  taskList.appendChild(li);
}