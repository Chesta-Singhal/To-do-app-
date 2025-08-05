const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const darkModeToggle = document.getElementById("darkModeToggle");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="completeBtn">✔</button>
      <button class="deleteBtn">✖</button>
    </div>
  `;

  // Mark as Complete
  li.querySelector(".completeBtn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete Task
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});

// Toggle Dark Mode
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
