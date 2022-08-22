const getLocalStorage = () => {
  // Check if data is in storage and convert it to js object
  if (localStorage.getItem('taskList')) {
    return JSON.parse(localStorage.getItem('taskList'));
  }
  return [];
};

export default getLocalStorage;