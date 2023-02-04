import { toDoList, taskNumber, ul, renderList } from './vars.js';

const removeTask = e => {
  const index = e.target.dataset.key;
  console.log(index);
  console.log(toDoList.map(el => el.textContent));
  toDoList.splice(index, 1);
  console.log(toDoList.map(el => el.textContent));
  ul.textContent = '';
  renderList();
  taskNumber.textContent = toDoList.length;
};

export default removeTask;
