const form = document.querySelector('#add');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');

const numberOfTasks = [...document.querySelectorAll('ul li')].length;
taskNumber.textContent = numberOfTasks;

const addTask = e => {
  e.preventDefault();
  const input = document.querySelector('#add input');

  if (input.value === '') return;

  const li = document.createElement('li');
  const btn = document.createElement('button');

  li.textContent = input.value;
  btn.textContent = 'x';

  li.appendChild(btn);
  ul.appendChild(li);

  input.value = '';

  const numberOfTasks = [...document.querySelectorAll('ul li')].length;
  taskNumber.textContent = numberOfTasks;
};

form.addEventListener('submit', addTask);
