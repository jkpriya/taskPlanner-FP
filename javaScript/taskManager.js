// create  a html card to add to task columns
function createTaskHtml(id, title, details, assignTo, dueDate, status) {
    const html = `<div id="draggable-handle" class="card mt-2  " >                     
        <!-- Card content -->
        <div class="card-body" >
            <!-- Title -->
            <h4 class="card-title"><a>${title}</a></h4>
            <!-- Text -->
            <div class="card-text taskDescription">
                <label for="cardLabelDescription">Task Description: </label>
                <p class="cardDescriptionValue">${details}</p>
            </div>
            <!-- Assign To -->
            <div class="card-text assignto">
                <label for="cardLabelAssign">Assign To: </label>
                <p class="cardAssignedToValue"> ${assignTo}</p>
            </div>
            <!-- Due Date -->
            <div class="card-text duedate">
                <label for="cardLabelDueDate">DueDate: </label>
                <p class="cardDueDateValue"> ${dueDate}</p>
            </div>
            <!-- Status -->
            <div class="card-text status">
                <label for="cardLabelStatus">Status: </label>
                <p id="${status}"class="cardStatusValue">${status}</p>
            </div>
            <!-- Button -->
            <button data-task-id=${id} onclick="editTaskForm(this)"
            data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary edit-button" >Edit</button>
            <button data-task-id=${id} onclick="deleteTaskForm(this)" class="btn btn-primary del-button">Delete</button>
        </div>                              
    </div> <br>`;
    return html;
};
//Function editTaskForm(e) is triggered when EDIT button in createTaskHtml() card is clicked
//It passes the selected task (object ) card to the form .
//getTask() helps to find the task to be edited ,then edit it and assign it to a form value
function editTaskForm(e) {
    const task = taskManager.getTask(Number(e.dataset.taskId));
    taskid.value = task.id;
    taskTitle.value = task.title;
    taskDetails.value = task.details;
    taskAssign.value = task.assignTo;
    taskStatus.value = task.status;
    taskDueDate.value = task.dueDate;
}
//Function deleteTaskForm(e) is triggered when DELETE button in createTaskHtml() card is clicked
//deleteTask() Find the task to be deleted from the tasks array and delete it 
// function deleteTaskForm(e) {
//     taskManager.deleteTask(Number(e.dataset.taskId));
// }

//Selectors used to keep track on static cards entered in index.html
const todoColumn = document.querySelector(".ToDo");
const inProgressColumn = document.querySelector(".InProgress");
const reviewColumn = document.querySelector(".Review");
const doneColumn = document.querySelector(".Done");
const todoColumnDefaultValues = todoColumn.innerHTML;
const inProgressColumnDefaultValues = inProgressColumn.innerHTML;
const reviewColumnDefaultValues = reviewColumn.innerHTML;
const doneColumnDefaultValues = doneColumn.innerHTML;

//Create a  TaskManager class

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId  = currentId;
    }
    //addTask Method to assign the values and push it into the array
    // addTask() Method accepts the parameters from the Form and  check the task id = -1 ,if yes create a new task and pushes it to the tasks() array.
    //else it pass the parameters to the editTaskForm() method
    addTask(title, details, assignTo, dueDate, status, taskid) {
        if (taskid == -1) {
            let newTask = {
                id: this.currentId++,
                title: title,
                details: details,
                assignTo: assignTo,
                dueDate: dueDate,
                status: status,
            };

            this.tasks.push(newTask);
        } else {
            this.editTask(taskid, title, details, assignTo, dueDate, status);
         }
    }
    //getTask(id) helps to find the task to be edited/deleted
    getTask(id) {
        return this.tasks.find(task => task.id == id);
    }

    //editTask() method add the edited task card to the tasks array
    //editTask() is called when the SAVE button is clicked after editing the task card.
    //It accepts the edited form parameteres() and uses "taskid" to match the task in a tasks() array using filter Iterator
    //Then assigned the edited parameteres to the matched tasks.
    editTask(id, title, details, assignTo, dueDate, status) {
        const matchedTasks = this.tasks.filter(x => x.id == id);
        const matchedTask = matchedTasks[0];
        matchedTask.title = title;
        matchedTask.details = details;
        matchedTask.status = status;
        matchedTask.assignTo = assignTo;
        matchedTask.dueDate = dueDate;
    }

    //deleteTask() method deletes the selected task in a tasks array and render the updated tasks()array
    // deleteTask(id) {
    //     this.tasks = this.tasks.filter(x => x.id != id);
    //     this.render();
    // }
    //Render method used to dispaly the cards in a webpage.
    render() {
        this.clearColumns();
        this.tasks.forEach(currentTask => {
            //console.log(currentTask);
            const date = new Date(currentTask.dueDate);
            const formattedDate =
                date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            const column = document.querySelector(`.${currentTask.status}`);
            const taskHtml = createTaskHtml(currentTask.id, currentTask.title, currentTask.details, currentTask.assignTo,formattedDate, currentTask.status);
            column.innerHTML += taskHtml;
        });
    }
    // To recreate all the static cards
    clearColumns() {
        todoColumn.innerHTML = todoColumnDefaultValues;
        inProgressColumn.innerHTML = inProgressColumnDefaultValues;
        reviewColumn.innerHTML = reviewColumnDefaultValues;
        doneColumn.innerHTML = doneColumnDefaultValues;
    }

}



