import { toDoList, inputSearch, ul, renderList } from './vars.js';
import removeTask from './remove.js';

const searchTask = () => {
  const toDoWithoutBtn = toDoList.map(li => {
    return li.textContent
      .split('')
      .splice(0, li.textContent.length - 1)
      .join('');
  });

  const filterLis = toDoWithoutBtn.filter(li => {
    return li.toLowerCase().includes(inputSearch.value.toLowerCase());
  });

  if (inputSearch.value !== '') {
    ul.textContent = '';

    let DatasetNumber = 0;
    for (const li of filterLis) {
      const filterLi = document.createElement('li');
      filterLi.textContent = li;
      filterLi.dataset.key = DatasetNumber;

      const btn = document.createElement('button');
      btn.textContent = 'x';
      btn.dataset.key = DatasetNumber;
      btn.addEventListener('click', removeTask);

      filterLi.appendChild(btn);
      ul.appendChild(filterLi);

      DatasetNumber++;
    }
  } else {
    ul.textContent = '';
    for (const task of toDoList) {
      ul.appendChild(task);
    }
  }
};

export default searchTask;
