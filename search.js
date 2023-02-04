const input = document.querySelector('#search');
const lis = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

const searchTask = () => {
  const lisWithoutBtn = lis.map(li => {
    return li.textContent
      .split('')
      .splice(0, li.textContent.length - 5)
      .join('');
  });

  const filterLis = lisWithoutBtn.filter(li => {
    return li.toLowerCase().includes(input.value.toLowerCase());
  });

  if (input.value !== '') {
    ul.textContent = '';

    let DatasetNumber = 0;
    for (const li of filterLis) {
      DatasetNumber++;

      const filterLi = document.createElement('li');
      filterLi.textContent = li;
      filterLi.dataset.key = DatasetNumber;

      const btn = document.createElement('button');
      btn.textContent = 'usuń';
      btn.dataset.key = DatasetNumber;

      filterLi.appendChild(btn);
      ul.appendChild(filterLi);
    }
  } else {
    ul.textContent = '';
    for (const li of lis) {
      ul.appendChild(li);
    }
  }
};

window.addEventListener('keyup', searchTask);
