class Task {
    constructor(description, completed, id) {
        this.description = description;
        this.completed = completed;
        this.id = id;
    }
}

const addTask = (description) => {
    // Check for empty book and add book to booksArray
    if (description) {
        let taskArray = localStorageMock.getItem();
        const task = new Task(description, false, taskArray.length + 1);
        taskArray = [...taskArray, task];
        localStorageMock.setItem(taskArray);
    }
};

const removeTask = (id) => {
    let taskArray = localStorageMock.getItem();
    if (id >= 0) {
      taskArray = taskArray.filter((task) => task.id !== id);
    } else {
      taskArray = taskArray.filter((task) => !task.completed);
    }
    updateArray(taskArray);
    localStorageMock.setItem(taskArray);
};

// const updateArray = (taskArray) => {
//     taskArray.forEach((task) => {
//       task.id = taskArray.indexOf(task) + 1;
//     });
// };