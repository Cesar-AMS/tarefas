const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskContent = taskInput.value.trim();
    if (taskContent !== '') {
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = taskContent;
        taskList.appendChild(newTaskItem);
        taskInput.value = '';
    }
});
