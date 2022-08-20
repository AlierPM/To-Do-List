import './style.css';
import displayList from './modules/displayList.js';
import addTask from './modules/addTask.js';
import getLocalStorage from './modules/getStorage.js';
import removeTask from './modules/removeTask.js';

const listInput = document.getElementById('list-input');
const clearBtn = document.getElementById('clear-btn');

listInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.key === 'Enter') {
    addTask(e.target.value);
    listInput.value = '';
    displayList(getLocalStorage());
  }
});

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  removeTask(-1);
  displayList(getLocalStorage());
});

window.addEventListener('load', () => {
  displayList(getLocalStorage());
});
