const toDoList = [];
let index = 0;

const form = document.querySelector('#add');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');

const numberOfTasks = toDoList.length;
taskNumber.textContent = numberOfTasks;

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
  toDoList.forEach(task => ul.appendChild(task));

  input.value = '';
  index++;
  const numberOfTasks = [...document.querySelectorAll('ul li')].length;
  taskNumber.textContent = numberOfTasks;
};

form.addEventListener('submit', addTask);
