import { toDoList, taskNumber, ul, renderList } from './vars.js';

let index = 0;

const addTask = e => {
  e.preventDefault();
  const input = document.querySelector('#add input');

  if (input.value === '') return;

  ul.textContent = '';

  const li = document.createElement('li');
  li.textContent = input.value;
  li.dataset.key = index;

  const btn = document.createElement('button');
  btn.textContent = 'x';
  btn.dataset.key = index;

  li.appendChild(btn);

  toDoList.push(li);
  renderList();

  input.value = '';
  index++;

  taskNumber.textContent = toDoList.length;
};

export default addTask;
