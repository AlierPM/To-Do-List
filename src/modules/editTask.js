import getLocalStorage from './getStorage.js';
import setLocalStorage from './setStorage.js';

const editTask = (id) => {
  const editable = document.getElementById(`label-${id}`);
  editable.contentEditable = 'true';
  editable.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      const taskArray = getLocalStorage();
      taskArray[id].description = editable.textContent;
      setLocalStorage(taskArray);
    }
  });
};

export default editTask;