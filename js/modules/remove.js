import { toDoList, taskNumber, ul, renderList } from './vars.js';

const removeTask = e => {
  const index = e.target.dataset.key;

  console.log(index);
  toDoList.splice(index, 1);
  ul.textContent = '';
  renderList();
  taskNumber.textContent = toDoList.length;
};

export default removeTask;
