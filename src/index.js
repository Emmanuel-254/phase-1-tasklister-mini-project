document.addEventListener('DOMContentLoaded', () => {
	const taskForm = document.getElementById('create-task-form');
	const taskList = document.getElementById('tasks');

	taskForm.addEventListener('submit', function (event) {
		event.preventDefault();

		const newTaskDescription = document.getElementById(
			'new-task-description'
		).value;

		if (newTaskDescription.trim() !== '') {
			const taskItem = document.createElement('li');
			taskItem.textContent = newTaskDescription;

			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';
			deleteButton.style.marginLeft = '10px';
			deleteButton.addEventListener('click', function () {
				taskItem.remove();
			});

			taskItem.appendChild(deleteButton);

			taskList.appendChild(taskItem);

			taskForm.reset();
		}
	});
});
