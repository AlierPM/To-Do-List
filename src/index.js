import './style.css';

class Template {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let array = [];
const sendToLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(array));
};

const toDoContainer = document.querySelector('.toDoContainer');
toDoContainer.innerHTML = `
  <div class="main-div">
    <p id="header">Today's To Do <i class="fas fa-sync"></i></p>
    <form class="form">
      <input class="dataEntry" type="text" placeholder="Add to your list..." required></input>
    </form>
    <p id="clear">Clear all completed</p>
  </div>
`;
// Create list
const createList = () => {
  const form = document.querySelector('.form');
  const list = document.createElement('div');
  list.className = 'input-div';
  form.appendChild(list);
  const checkboxes = document.createElement('input');
  checkboxes.className = 'input';
  checkboxes.type = 'checkbox';
  const listText = document.createElement('p');
  listText.className = 'listContent';
  const threeDots = document.createElement('i');
  threeDots.className = 'fas fa-ellipsis-v';
  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash-alt icon2';
  list.append(checkboxes, listText, threeDots, trashIcon);
}


// Window Load event
window.addEventListener('load', () => {
  const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; i < getFromLocalStorage.length; i += 1) {
    createList();
    const listText = document.querySelectorAll('.listContent');
    listText[i].textContent = getFromLocalStorage[i].description;
    if (getFromLocalStorage[i].completed === true) {
      getFromLocalStorage[i].completed = false;
    }
    localStorage.setItem('list', JSON.stringify(getFromLocalStorage));

    array = getFromLocalStorage;
  }
});