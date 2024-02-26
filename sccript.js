document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        } else if (event.target.classList.contains("delete")) {
            event.target.parentElement.remove();
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.innerHTML += '<span class="delete"> ❌</span>';
        taskList.appendChild(li);
    }
});
