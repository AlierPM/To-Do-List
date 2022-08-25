const localStorageMock = (() => {
  let taskList = [];
  return {
    getItem(key) {
      return taskList[key];
    },
    setItem(key, value) {
      taskList[key] = value.toString();
    },
    clear() {
      taskList = [];
    },
    removeItem(key) {
      delete taskList[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});