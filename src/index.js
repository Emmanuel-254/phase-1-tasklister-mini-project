document.addEventListener('DOMContentLoaded', () => {
	const taskForm = document.getElementById('create-task-form');
	const tasksList = document.getElementById('tasks');

	taskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const taskDescription = document.getElementById(
			'new-task-description'
		).value;
		const priority = document.getElementById('priority').value;
		addTask(taskDescription, priority);
		taskForm.reset();
	});

	function addTask(description, priority) {
		const li = document.createElement('li');
		li.textContent = description;
		li.classList.add(priority); //

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.onclick = () => {
			li.remove();
		};

		const editButton = document.createElement('button');
		editButton.textContent = 'Edit';
		editButton.onclick = () => {
			editTask(li);
		};

		li.appendChild(deleteButton);
		li.appendChild(editButton);
		tasksList.appendChild(li);

		if (priority === 'high') {
			li.style.color = 'red';
		} else if (priority === 'medium') {
			li.style.color = 'yellow';
		} else {
			li.style.color = 'green';
		}
	}

	function editTask(li) {
		const newDescription = prompt('Edit task:', li.firstChild.textContent);
		if (newDescription) {
			li.firstChild.textContent = newDescription;
		}
	}
});
