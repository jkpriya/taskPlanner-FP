// Selectors
const form = document.querySelector('#addTaskForm');


const taskTitle = document.querySelector('#taskTitle');
const taskDetails = document.querySelector('#taskDetails');
const taskAssign = document.querySelector('#taskAssign');
const taskDueDate = document.querySelector('#taskDueDate');
const taskStatus = document.querySelector('#taskStatus');
const btnSave = document.querySelector('#btnSave');
const errMsgTitle = document.querySelector('#errMsgTitle');
const errMsgDetails = document.querySelector('#errMsgDetails');
const errMsgAssign = document.querySelector('#errMsgAssign');
const errMsgDueDate = document.querySelector('#errMsgDueDate');
const errMsgStatus = document.querySelector('#errMsgStatus');
let validationCount=0;
// const btnReset=document.querySelector('#btnReset');
//Function
function validFormFieldInput(){
    // Task Tile Validation (no of characters should be greater than 5)
    if(taskTitle.value.length < 5) {
        errMsgTitle.innerHTML = "Task Title should be greater than 5 Characters";
        errMsgTitle.style.color = "#ff0000";
        taskTitle.style.borderColor = "red";
        taskTitle.focus();
        validationCount++;
    }
    else{
        errMsgTitle.innerHTML = "";
        taskTitle.style.borderColor = "black";
    }
    // Task description Validation (no of characters should be greater than 5)
    if(taskDetails.value.length < 5) {
        errMsgDetails.innerHTML = "Task Description should be greater than 5 Characters";
        errMsgDetails.style.color = "#ff0000";
        taskDetails.style.borderColor = "red";
        taskDetails.focus();
        validationCount++;
    }
    else{
        errMsgDetails.innerHTML = ""; 
        taskDetails.style.borderColor = "black";
    }
    // Task assign Validation (no of characters should be greater than 1)
    if(taskAssign.value.length < 2) {
        errMsgAssign.innerHTML = "Name should be atleast 2 characters";
        errMsgAssign.style.color = "#ff0000";
        taskAssign.style.borderColor = "red";
        taskAssign.focus();
        validationCount++;
    }
    else{
        errMsgAssign.innerHTML = "";
        taskAssign.style.borderColor = "black";
    }
    // Due Date Validation (should not be blank )
    if(!taskDueDate.value) {
        errMsgDueDate.innerHTML = "Please pick a Due Date";
        errMsgDueDate.style.color = "#ff0000";
        taskDueDate.style.borderColor = "red";
        taskDueDate.focus();
        validationCount++;
    }
    else{
        errMsgDueDate.innerHTML = "";
        taskDueDate.style.borderColor = "black";  
    }
    //Status Validation (should not be blank )
    if(taskStatus.value==="") {
        errMsgStatus.innerHTML = "Please Choose a Status";
        errMsgStatus.style.color = "#ff0000";
        taskStatus.style.borderColor = "red";
        taskStatus.focus();
        validationCount++;
    }
    else{
        errMsgStatus.innerHTML = "";
        taskStatus.style.borderColor = "black";  
    }
}

// Call the events
// form.addEventListener('submit',validFormFieldInput);
btnSave.addEventListener('click',validFormFieldInput);

//Initialize a new instance of `TaskManager
const taskManager = new TaskManager();

//console.log()` the `tasks` property to check whether the tasks array is empty
 console.log(taskManager.tasks);



/*
### Step 3: Showing errors to users

1. Try out the example over in [Bootstrap form validation (You might have to scroll down to "validation")](https://getbootstrap.com/docs/4.5/components/forms/#validation/) and check out their valid and invalid messages.
2. Add `<div class="valid-feedback">` and `<div class="invalid-feedback">` in each of your form inputs with a message to the user.
3. Depending on if the input is valid or invalid, we can add or remove the class to the corrosponding input. We can use:
 `newTaskNameInput.classList.remove('is-valid');` together with  
`newTaskNameInput.classList.add('is-invalid');`  and Bootstrap will take care of showing an invalid input message. Try the opposite logic for a valid message!  */