// Update TaskArray with data from localStorage
const setLocalStorage = (taskArray) => {
  localStorage.setItem('taskList', JSON.stringify(taskArray));
};

export default setLocalStorage;