// import './addTask.js'
// import { Task } from "../modules/Task.js"

class Task {
    constructor(description, completed, id) {
        this.description = description;
        this.completed = completed;
        this.id = id;
    }
}

const localStorageMock = (() => {
    let taskList = [];
    return {
        getItem() {
            return taskList;
        },
        setItem(value) {
            taskList.push(value.toString());
        },
        clear() {
            taskList = [];
        },
        removeItem(key) {
            delete taskList[key];
        }
    };
})();
// Object.defineProperty(window, 'localStorage', {
//     value: localStorageMock
// });


const addTask = (description) => {
    // Check for empty book and add book to booksArray
    if (description) {
        let taskArray = localStorageMock.getItem();
        const task = new Task(description, false, taskArray.length + 1);
        taskArray = [...taskArray, task];
        localStorageMock.setItem(taskArray);
    }
};

describe ('Add', ()=>{
  test('local storage have two items', ()=>{
    addTask('task1');
    addTask('task2');
    const array = localStorageMock.getItem();
    expect(array.length).toBe(2);
  })
})