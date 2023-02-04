const removeTask = e => {
  e.target.remove();
};

document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', removeTask);
});
