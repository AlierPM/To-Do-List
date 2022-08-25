// import '../modules/addTask.js';
import Task from '../modules/Task.js';
import updateArray from '../modules/updateArray.js';

// class Task {
//     constructor(description, completed, id) {
//         this.description = description;
//         this.completed = completed;
//         this.id = id;
//     }
// }

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

// const updateArray = (taskArray) => {
//     taskArray.forEach((task) => {
//       task.id = taskArray.indexOf(task) + 1;
//     });
// };

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

describe ('Add', ()=>{
  test('local storage have two items', ()=>{
    addTask('task1');
    addTask('task2');
    const array = localStorageMock.getItem();
    expect(array.length).toBe(2);
  })
})

describe('remove', () => {
    test('local storage should have one item', () => {
        removeTask(0);
        const array = localStorageMock.getItem();
        expect(array.length).toBe(1);
    })
})