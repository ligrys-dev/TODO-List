import removeTask from './remove.js';

const toDoList = [];
const taskNumber = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const inputSearch = document.querySelector('#search');
const lis = [...document.querySelectorAll('li')];

export const remove = () => {
  toDoList.forEach(task => {
    ul.appendChild(task);
    task.addEventListener('click', removeTask);
  });
};

export { toDoList, taskNumber, ul, inputSearch, lis };
