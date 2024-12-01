const addButton = document.getElementById('add-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add task
addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    
    // Create a delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });
    
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    // Clear input field
    taskInput.value = '';
  }
});

// Optionally, allow pressing Enter to add task
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
});
