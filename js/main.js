import addTask from './modules/add.js';
import { taskNumber, toDoList } from './modules/vars.js';
import removeTask from './modules/remove.js';
import searchTask from './modules/search.js';

taskNumber.textContent = toDoList.length;

document.querySelector('#add').addEventListener('submit', addTask);

document.querySelectorAll('li button').forEach(btn => {
  btn.addEventListener('click', removeTask);
});

window.addEventListener('keyup', searchTask);
