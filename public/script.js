async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    list.innerHTML += `<li>${task.title}</li>`;
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");

  await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: input.value
    })
  });

  input.value = "";
  loadTasks();
}

loadTasks();
