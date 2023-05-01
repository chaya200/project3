//pointers
let taskName = document.getElementById("taskName");
let taskDate = document.getElementById("taskDate");
let taskTime = document.getElementById("taskTime");
let myTask = document.getElementById("myTask");
let mainCounter;

function init() {
  if (localStorage.getItem("tasks")) {
    userTask.tasksArr = JSON.parse(localStorage.getItem("tasks"));
    mainCounter = localStorage.getItem("counter");
  } else {
    userTask.tasksArr = [];
  }
  if (userTask.tasksArr.length > 0) {
    myTask.innerHTML = userTask.tasksArr;
  } else {
    mainCounter = 0;
    localStorage.setItem("counter", mainCounter);
  }
}

//save data
function sendData() {
  //validation checking
  if (taskName.value == "" || taskDate.value == "" || taskTime.value == "") {
    alert("Please enter the missing values");
  } else {
    let newTask = { ...task };
    newTask.taskName = taskName.value;
    newTask.taskDate = taskDate.value;
    newTask.taskTime = taskTime.value;
    //initialize the main div, so that the animation will only apply on a specific div
    myTask.innerHTML = userTask.tasksArr;
    createTask(newTask);
    //increase and update of counter
    mainCounter = Number(localStorage.getItem("counter"));
    mainCounter += 1;
    localStorage.setItem("counter", mainCounter);
    clearTask();
  }
}

function createTask(newTask) {
  let myNote = `
    <div class='addDiv'  >
    <i  class='glyphicon glyphicon-remove iconX' id=${mainCounter} onclick='userTask.deleteTask(this)'  ></i>
    <div class='textTask'>
    ${newTask.taskName}</div>
    <div class='dateTime'>${newTask.taskDate}<br/>${newTask.taskTime}</div></div>`;
  //add new task to array
  userTask.addTask(myNote);

  //adding another div for the fade-in effect
  myTask.innerHTML += `<span class='newDiv'>${myNote}</span>`;
}
function clearTask() {
  taskName.value = "";
  taskDate.value = "";
  taskTime.value = "";
}
