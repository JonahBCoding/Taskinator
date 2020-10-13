var formEl = document.querySelector("#task-form");
var  tasksToDoEl = document.querySelector("#tasks-to-do");

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  var listItemEl = document.createElement("li");
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);
  listItemEl.className = "task-item";
  listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler); 
  var listItemEl = document.createElement("li"); //create a new task item
  listItemEl.className = "task-item"; //style the new task item
  listItemEl.textContent = taskNameInput; //add the text
  tasksToDoEl.appendChild(listItemEl); //append the element to the task list


var createTaskEl = function(taskDataObj) {
    
}



 



