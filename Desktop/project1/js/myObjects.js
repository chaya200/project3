// single task
const task = {
  taskName: "",
  taskDate: "",
  taskTime: "",
};
const userTask = {
  //Fields
  tasksArr: [], //tasks collection

  //methods
  saveTasks: () => {
    localStorage.setItem("tasks", JSON.stringify(userTask.tasksArr));
  },
  loadTasks: () => {
    userTask.tasksArr = JSON.parse(localStorage.getItem("tasks"));
    mainCounter = localStorage.getItem("counter");
  },
  addTask: (newTask) => {
    userTask.tasksArr.push(newTask);
    userTask.saveTasks();
  },
  deleteTask: (place) => {
    //Creates a new array that contains the values of the old array, except for the div to remove- using map
    if (userTask.tasksArr.length > 0) {
      let newTask = [];
      userTask.tasksArr.map((item) => {
        if (!item.includes("id=" + place.id)) {
          newTask.push(item);
        }
      });
      userTask.tasksArr = newTask;
    }
    userTask.saveTasks();
    myTask.innerHTML = userTask.tasksArr;
  },
};
