export class Task {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

export const addTask = (taskList, description) => {
  if (description) {
    const task = new Task(description, false, taskList.length);
    taskList.push(task);
  }
};

export const removeTask = (taskList, id) => {
  taskList.splice(id, 1);
};

export const updateArray = (taskList) => {
  taskList.forEach((task) => {
    task.id = taskList.indexOf(task);
  });
};

export const editTask = (taskList, id, value) => {
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].id === id) {
      taskList[i].description = value;
    }
  }
};

export const completeTask = (taskList, id, status) => {
  const selected = taskList.findIndex((element) => element.id === id);
  taskList[selected].completed = status;
};

export const clearCompletedTask = (taskList) => {
  taskList.splice(taskList.findIndex((element) => element.completed === true), 1);
  taskList.forEach((value, index, taskList) => {
    taskList[index].id = index;
  });
};