const taskContainer = document.getElementById("task-container");
const addTaskBtn = document.getElementById("add-task-btn");
const addNewTaskBtn = document.getElementById("add-new-task-btn")
const dateInput = document.getElementById("date-input");
const titleInput = document.getElementById("title-input");
const taskDescription = document.getElementById("task-description");
const clearTaskBtn = document.getElementById("clear-task-button"); // Fix the ID here
const taskResult = document.getElementById("task-result")
const taskResultContainer = document.getElementById("task-result-container");
const deleteTaskBtn = document.getElementsByClassName("delete-task-btn")
const importantTask = document.getElementById("important")
let isTaskContainerShowing = false;
let tasksArr = []
const showAddTask = () => {
    isTaskContainerShowing = !isTaskContainerShowing;
    taskContainer.style.display = isTaskContainerShowing ? "flex" : "none";
    addTaskBtn.innerText = isTaskContainerShowing ? "Close task" : "Add task";
};

const clearTask = () => {
    dateInput.value = "";
    titleInput.value = "";
    taskDescription.value = "";
    importantTask.checked = false;
};

const addTask = () => {
    if (!titleInput.value) {
        alert("Please insert a title");
        return
    } else if (!dateInput.value) {
        alert("Please insert a date")
        return
    } else {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task-result-container");

        taskElement.innerHTML = `
            <h1>${titleInput.value}</h1>
            <span>${dateInput.value}</span>
            <p>${taskDescription.value}</p>
            ${importantTask.checked ? '<img alt="" width="25px" height="25px"src="https://img.icons8.com/ios-glyphs/30/star--v1.png">' : ""}
            <button class="delete-task-btn" class="buttons">Delete</button>
            <button class="buttons">Edit</button>
        `;

        taskResult.appendChild(taskElement);

        const deleteButton = taskElement.querySelector(".delete-task-btn");
        deleteButton.addEventListener("click", () => {
            taskElement.remove();
        });

        clearTask();
    }
}

addTaskBtn.addEventListener("click", showAddTask);
clearTaskBtn.addEventListener("click", clearTask); // Fix the function name here
addNewTaskBtn.addEventListener("click", addTask)
