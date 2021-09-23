//Creating a class

class TaskManager{
    constructor(currentId=0) {
        this.tasks  = [];
        this.currentId = currentId;       
    }
    //Task 7 
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
}
