// import '../modules/addTask.js';
import Task from './Task.js';
import updateArray from '../modules/updateArray.js';


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

describe('Add', ()=>{
  test('local storage have two items', ()=>{
    addTask('task1');
    addTask('task2');
    const array = localStorageMock.getItem();
    expect(array).toHaveLength(2);
  })
})

describe('remove', () => {
    test('local storage should have one item', () => {
        removeTask(0);
        const array = localStorageMock.getItem();
        expect(array).toHaveLength(1);
    })
})