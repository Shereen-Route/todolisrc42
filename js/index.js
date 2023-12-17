var addInput = document.getElementById("addInput");
var dateInput = document.getElementById("dateInput");
var addButton = document.getElementById("addButton");

var TaskContainer = [
   
]
if(localStorage.getItem("Tasks") != null){
    TaskContainer = JSON.parse(localStorage.getItem("Tasks"))
    display(TaskContainer)
}
function addTask(){
    if(validateDate() && validateTask()){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
        var Task = {
            title:addInput.value,
            date:dateInput.value
          }
          TaskContainer.push(Task)
          localStorage.setItem("Tasks",JSON.stringify(TaskContainer))
          display(TaskContainer)
          clear()
    }
 

}
function clear(){
    addInput.value = ""
    dateInput.value = ""
}

function display(arr){
    var cartona = `
    `;
    for(var i=0 ; i<arr.length ; i++){
     cartona += `
     <div class="col-lg-12">
     <div class="form-check d-flex align-items-center px-3">
       <input class="form-check-input mx-0" type="checkbox"  id="${i}">
       <label class="form-check-label h3 m-3 p-0" for="${i}">${arr[i].title}</label>
       <div class="icon ms-auto d-flex align-items-center gap-2" >
         <i class="fa-solid fa-trash-can text-danger" onClick="deleteTask(${i})"></i>
         <div class="bg-white border border-warning rounded p-2">
           <i class="fa-solid fa-hourglass-half text-warning"></i>
           <span>
           ${arr[i].date}
           </span>
         </div>
       </div>
     </div>
   </div>
     ` 
    }
    document.getElementById("TaskContent").innerHTML = cartona

}
function deleteTask(id){
  console.log(id);
  TaskContainer.splice(id,1)
  localStorage.setItem("Tasks",JSON.stringify(TaskContainer));
  display(TaskContainer)
}

function validateDate(){
    var currentDate = new Date().toJSON().slice(0,10);
    if(dateInput.value < currentDate){
        swal("Entar valid date");
        return false
    }else{
        return true
    }
}
function validateTask(){
   var regx = /.+/;
    if(regx.test(addInput.value)){
        return true
    }else{
        swal("Entar  Task");
        return false  
    }
}

