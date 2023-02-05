import removeTask from './remove.js';

const toDoList = [];
const taskNumber = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const inputSearch = document.querySelector('#search');

export const renderList = () => {
  toDoList.forEach((task, index) => {
    console.log(task.children.dataset);
    task.dataset.key = index;
    task.querySelector('button').dataset.key = index;

    ul.appendChild(task);
    task.addEventListener('click', removeTask);
  });
};

export { toDoList, taskNumber, ul, inputSearch };
