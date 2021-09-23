//create a method task html
function createTaskHtml(title,details,assignTo,dueDate,status) {
    const html =`<div id="draggable-handle" class="card mt-2  " >                     
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
                <p id="todo"class="cardStatusValue">${status}</p>
            </div>
            <!-- Button -->
            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary">Edit</a>
            <a href="#" class="btn btn-primary ">Delete</a>
        </div>                              
    </div> `;
    return html;
} ;
//Creating a class
class TaskManager{
    constructor(currentId=0) {
        this.tasks  = [];
        this.currentId = currentId;       
    }
    //addTask Method to assign the values and push it into the array
    addTask(title,details,assignTo,dueDate,status) {
        let newTask = {
            id:this.currentId++,
            title:title,
            details:details,
            assignTo:assignTo,
            dueDate:dueDate,
            status:status,
        };  
        this.tasks.push(newTask);
    }
    //Render method
    render() {
        let tasksHtmlList = [];
        for(let i=0; i<this.tasks.length; i++) {
            const tempTask = this.tasks[i];
            const date = new Date(tempTask.dueDate);
            const formattedDate = `${date}`;
            let taskHtml = createTaskHtml(tempTask.title,tempTask.details,tempTask.assignTo,formattedDate,tempTask.status);
            tasksHtmlList.push(taskHtml);
        }
        let tasksHtml = tasksHtmlList.join(`/n`);
        const todo = document.querySelector('.todo');
        const inProgress = document.querySelector('.inProgress');
        const review = document.querySelector('.review');
        const done = document.querySelector('.done');
        if(tasksHtmlList.status === 'To Do') {
            todo.innerHtml = tasksHtml; 
        }
        else if(tasksHtmlList.status === 'In Progress') {
            inProgress.innerHtml = tasksHtml; 
        }
        else if(tasksHtmlList.status === 'Review') {
            review.innerHtml = tasksHtml; 
        }
        else {
            done.innerHTML = tasksHtml;
        }
    }   
}
// const taskManager = new TaskManager();
// taskManager.render();
