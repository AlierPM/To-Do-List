import removeTask from './removeTask.js';
import editTask from './editTask.js';
import getLocalStorage from './getStorage.js';
import setLocalStorage from './setStorage.js';

const listHolder = document.getElementById('list-holder');

const displayList = (taskArray) => {
  listHolder.innerHTML = '';
  taskArray.forEach((item) => {
    listHolder.innerHTML += `
<div class="item-row">
<div class="list-item">
<input id="check-${item.id}" class="list-box" type="checkbox" name="${item.id}" value="value">
<label id="label-${item.id}" for="${item.id}">${item.description}</label><br>
</div>
<span class="pencil-container"><i id="pencil-${item.id}" class='fas fa-pencil-alt pencil'></i></span>
<span class="trash-container"><i id="trash-${item.id}" class="fa fa-trash-o trash"></i></span>
<span class="ellip-container"><i id="ellip-${item.id}" class="fa fa-ellipsis-v icons"></i></span>    
</div>`;
  });

  const toggleIcon = (id, eventType) => {
    if (eventType === 'mouseover') {
      document.getElementById(`pencil-${id}`).classList.add('active');
      document.getElementById(`trash-${id}`).classList.add('active');
    } else if (eventType === 'mouseout') {
      setTimeout(() => {
        document.getElementById(`pencil-${id}`).classList.remove('active');
        document.getElementById(`trash-${id}`).classList.remove('active');
      }, 2000);
    }
  };
  const pencilContainer = document.querySelectorAll('.pencil-container');
  const trashContainer = document.querySelectorAll('.trash-container');
  const ellipContainer = document.querySelectorAll('.ellip-container');
  const listBox = document.querySelectorAll('.list-box');

  const listenEvent = (itemContainer, eventType) => {
    itemContainer.forEach((item) => {
      item.addEventListener(eventType, (e) => {
        e.preventDefault();
        const id = parseInt(e.target.id.split('-')[1], 10);
        if (e.target.classList.contains('trash')) {
          removeTask(id);
          displayList(getLocalStorage());
        } else if (e.target.classList.contains('pencil')) {
          editTask(id);
        } else if (eventType === 'change') {
          const taskArray = getLocalStorage();
          const checkedLabel = document.getElementById(`label-${id}`);
          if (e.target.checked) {
            checkedLabel.classList.add('line-through');
            taskArray[id].completed = true;
            setLocalStorage(taskArray);
          } else {
            checkedLabel.classList.remove('line-through');
            taskArray[id].completed = false;
            setLocalStorage(taskArray);
          }
        }
      });
    });
  };
  const addEvent = (eventType) => {
    ellipContainer.forEach((ellip) => {
      ellip.addEventListener(eventType, (e) => {
        e.preventDefault();
        const id = e.target.id.split('-')[1];
        toggleIcon(id, eventType);
      });
    });
  };

  addEvent('mouseover');
  addEvent('mouseout');
  listenEvent(trashContainer, 'click');
  listenEvent(pencilContainer, 'click');
  listenEvent(listBox, 'change');
};

export default displayList;