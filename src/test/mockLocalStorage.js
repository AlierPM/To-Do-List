const localStorageMock = (() => {
  let taskList = [];
  return {
    getItem(key) {
      return taskList[key];
    },
    setItem(value) {
      taskList.push(value.toString());
    },
    clear() {
      taskList = [];
    },
    removeItem(key) {
      delete taskList[key];
    },
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

export default localStorageMock();