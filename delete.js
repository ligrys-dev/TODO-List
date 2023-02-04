const removeTask = e => {
  // e.target.parentNode.remove();
  e.target.parentNode.style.textDecoration = 'line-through';
  e.target.remove();
};

document.querySelectorAll('li button').forEach(btn => {
  btn.addEventListener('click', removeTask);
});
