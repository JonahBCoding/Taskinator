var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {

  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  createTaskEl(taskDataObj);
}

var createTaskEl = function (taskDataObj) {
  var listItemEL = document.createElement("li");
  listItemEl.className = "task-item";
  //create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  tasksToDoEl.appendChild(listItemEl);
}



formEl.addEventListener("submit", taskFormHandler);
var listItemEl = document.createElement("li"); //create a new task item
listItemEl.className = "task-item"; //style the new task item
listItemEl.textContent = taskNameInput; //add the text
tasksToDoEl.appendChild(listItemEl); //append the element to the task list








