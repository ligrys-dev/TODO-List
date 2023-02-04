const removeTask = e => {
  e.target.parentNode.remove();
};

document.querySelectorAll('li button').forEach(btn => {
  btn.addEventListener('click', removeTask);
});
