// To-Do List Functionality
document.getElementById('add-task-btn')?.addEventListener('click', () => {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    document.getElementById('tasks').appendChild(taskItem);
    taskInput.value = '';
  }
});

// Pomodoro Timer Functionality
let timerInterval;
document.getElementById('start-pomodoro')?.addEventListener('click', () => {
  let time = 25 * 60;
  timerInterval = setInterval(() => {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (time === 0) clearInterval(timerInterval);
  }, 1000);
});

document.getElementById('reset-pomodoro')?.addEventListener('click', () => {
  clearInterval(timerInterval);
  document.getElementById('timer').textContent = '25:00';
});