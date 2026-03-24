// getting elements based in id
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

//  fetch task from local storage
// if empty then empty array 
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// showing tasks in ui
function renderTasks() {
  
    // resetting to avoid duplicate list 
  list.innerHTML = "";
  
  // fetched tasks are fed to list
  tasks.forEach((task, index) => {
    
    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    li.textContent = task.text+ " ";
    

    // strike if completed
    if (task.completed) {
      li.className = "completedtask"
    }

    // toggle complete if clicked on
    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    });

    // delete button
    delBtn.textContent = "Delete";
    // dynamically add classlist
    delBtn.className = "deleteBtn";

    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// add task event listener
button.addEventListener("click", () => {
  const input = document.getElementById("taskInput");

  if (input.value.trim() === "") {
    alert("Enter the task dont leave it blank")
    return
  }
  // not completed by default
  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";

  saveTasks();
  renderTasks();
});

renderTasks();