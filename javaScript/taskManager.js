//create a method task html
function createTaskHtml(title, details, assignTo, dueDate, status) {
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
                <p id='${status}' class="cardStatusValue">${status}</p>
            </div>
            <!-- Button -->
            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary">Edit</a>
            <a href="#" class="btn btn-primary ">Delete</a>
        </div>                              
    </div> `;
  return html;
}
//Creating a class
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    //addTask Method to assign the values and push it into the array
    addTask(title, details, assignTo, dueDate, status) {
        let newTask = {
        id: this.currentId++,
        title: title,
        details: details,
        assignTo: assignTo,
        dueDate: dueDate,
        status: status,
        };
        this.tasks.push(newTask);
    }
    //Render method

    render() {
        let tasksHtmlTodoList = [];
        let tasksHtmlInProgressList = [];
        let tasksHtmlReviewList = [];
        let tasksHtmlDoneList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const tempTask = this.tasks[i];
            const date = new Date(tempTask.dueDate);
            const formattedDate =
            date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            console.log(tempTask.status);
            if (tempTask.status === 'ToDo') {
                const taskHtml = createTaskHtml(tempTask.title, tempTask.details, tempTask.assignTo, formattedDate, tempTask.status);
                tasksHtmlTodoList.push(taskHtml);
                // Set the inner html of the tasksList on the page
                // const tasksHtml = tasksHtmlTodoList.join("\n");
                // const tasksList = document.querySelector(".todo");
                // tasksList.innerHTML += tasksHtml;
            }
            else if (tempTask.status ===  'InProgress') {
                let taskHtml = createTaskHtml(tempTask.title, tempTask.details, tempTask.assignTo, formattedDate, tempTask.status);
                tasksHtmlInProgressList.push(taskHtml);
                console.log("InProgress Block" + tasksHtmlTodoList);
                // const tasksHtml = tasksHtmlInProgressList.join("\n");
                // const tasksList = document.querySelector(".inProgress");
                // tasksList.innerHTML += tasksHtml;
            }
            else if (tempTask.status === 'Review') {
                let taskHtml = createTaskHtml(tempTask.title, tempTask.details, tempTask.assignTo, formattedDate, tempTask.status);
                tasksHtmlReviewList.push(taskHtml);
                // const tasksHtml = tasksHtmlReviewList.join("\n");
                // const tasksList = document.querySelector(".review");
                // tasksList.innerHTML += tasksHtml;
            }
            else {
                let taskHtml = createTaskHtml(tempTask.title, tempTask.details, tempTask.assignTo, formattedDate, tempTask.status);
                tasksHtmlDoneList.push(taskHtml);
                // const tasksHtml = tasksHtmlDoneList.join("\n");
                // const tasksList = document.querySelector(".done");
                // tasksList.innerHTML += tasksHtml;
            }
        }
        const tasksHtml1 = tasksHtmlTodoList.join("\n");
        const tasksList1 = document.querySelector(".todo");
        tasksList1.innerHTML += tasksHtml1;
        const tasksHtml2 = tasksHtmlInProgressList.join("\n");
        const tasksList2 = document.querySelector(".inProgress");
        tasksList2.innerHTML += tasksHtml2;
        const tasksHtml3 = tasksHtmlReviewList.join("\n");
        const tasksList3 = document.querySelector(".review");
        tasksList3.innerHTML += tasksHtml3;
        const tasksHtml4 = tasksHtmlDoneList.join("\n");
        const tasksList4 = document.querySelector(".done");
        tasksList4.innerHTML += tasksHtml4;
    }
}

