document.getElementById('add-task-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;

    if (taskName && taskDeadline) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ name: taskName, deadline: taskDeadline });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        location.href = 'index.html';
    }
});