import {
  addTask, removeTask, editTask, completeTask, clearCompletedTask,
} from './add-remove.js';

// eslint-disable-next-line prefer-const
let taskArray = [];

describe('Add', () => {
  test('local storage have two items', () => {
    addTask(taskArray, 'task1');
    addTask(taskArray, 'task2');
    addTask(taskArray, 'task3');
    expect(taskArray).toHaveLength(3);
  });
});

describe('remove', () => {
  test('local storage should have one item', () => {
    removeTask(taskArray, 1);
    expect(taskArray).toHaveLength(2);
  });
});

describe('edit the tasklist', () => {
  test('Editing an Item', () => {
    editTask(taskArray, 0, 'unit testing');
    expect(taskArray[0].description).toBe('unit testing');
  });
});

describe('task completed', () => {
  test('The task is completed', () => {
    completeTask(taskArray, 0, true);
    expect(taskArray[0].completed).toBe(true);
  });
});

describe('Clear completed task', () => {
  test('A completed task is cleared ', () => {
    clearCompletedTask(taskArray);
    expect(taskArray).toHaveLength(1);
  });
});