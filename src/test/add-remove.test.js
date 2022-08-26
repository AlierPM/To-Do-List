import { addTask, removeTask } from './add-remove.js';

// eslint-disable-next-line prefer-const
let taskArray = [];

describe('Add', () => {
  test('local storage have two items', () => {
    addTask(taskArray, 'task1');
    addTask(taskArray, 'task2');
    expect(taskArray).toHaveLength(2);
  });
});

describe('remove', () => {
  test('local storage should have one item', () => {
    // addTask(taskArray, 'task1');
    removeTask(taskArray, 1);
    expect(taskArray).toHaveLength(1);
  });
});