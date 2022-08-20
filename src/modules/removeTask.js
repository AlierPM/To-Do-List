import getLocalStorage from './getStorage.js';
import setLocalStorage from './setStorage.js';
import updateArray from './updateArray.js';

const removeTask = (id) => {
  let taskArray = getLocalStorage();
  if (id >= 0) {
    taskArray = taskArray.filter((task) => task.id !== id);
  } else {
    taskArray = taskArray.filter((task) => !task.completed);
  }
  updateArray(taskArray);
  setLocalStorage(taskArray);
};

export default removeTask;