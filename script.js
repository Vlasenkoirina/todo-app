document.getElementById('add-task').addEventListener('click', function() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText) {
    // Создаем новый элемент списка
    const li = document.createElement('li');
    li.textContent = taskText;

    // Добавляем кнопку для удаления задачи
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      li.remove(); // Удаляем задачу при клике на кнопку
    });

    li.appendChild(deleteBtn);

    // Добавляем задачу в список
    document.getElementById('task-list').appendChild(li);

    // Очищаем поле ввода
    taskInput.value = '';
  }
});
