export class Task {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

export const addTask = (taskList, description) => {
  if (description) {
    const task = new Task(description, false, taskList.length + 1);
    taskList.push(task);
  }
};

export const removeTask = (taskList, id) => {
  taskList.splice(id, 1);
};

export const updateArray = (taskList) => {
  taskList.forEach((task) => {
    task.id = taskList.indexOf(task) + 1;
  });
};