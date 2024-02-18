function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed');
        });

        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}
