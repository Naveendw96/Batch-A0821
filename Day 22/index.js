let globalTaskData = [];
taskContents = document.getElementById("taskContentsRow");

const addCard = () => {
    const newTaskDetails = {        //template literal (`${variable}`) used here. It allow us to add variables inside string
        id: `${Date.now()}`,        //use id as primary key & it should unique so we use time that task created
        url: document.getElementById("imageURL").value,
        title: document.getElementById("taskTitle").value,
        description: document.getElementById("taskDescription").value,
        type: document.getElementById("taskType").value
    }; 
    
    taskContents.insertAdjacentHTML('beforeend', generateTaskCard(newTaskDetails));  //insertAdjacentHTML - method that Adding elements to the DOM // beforeend - Adding at the end (end of the last child)
                                                                                      // newTaskDetails object is pass to generateTaskCard function and that is added to html
    globalTaskData.push(newTaskDetails);
    saveToLocalStorage();
}
                            // object destructuring
const generateTaskCard = ({id, url, title, type, description}) => 
    `<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="card">
            <div class="card-header">
                <div class="card-header d-flex justify-content-end">
                <button type="button" class="btn btn-outline-info" name=${id} onclick="editTask(this)">
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button type="button" class="btn btn-outline-danger" name=${id} onclick="deleteTask(this)">
                    <i class="far fa-trash-alt"></i>
                </button>
                </div>
            </div>
            <img src=${url} class="card-image-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <span class="badge bg-primary">${type}</span>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline-primary float-end">Open Task</button>
            </div>
        </div>
    </div>`

const saveToLocalStorage = () => {
    localStorage.setItem("tasky", JSON.stringify({tasks: globalTaskData})) //JS object converted into string format
}

const reloadTaskCard = () => {
    const localStorageCopy = JSON.parse(localStorage.getItem("tasky"));  // parse - convert to object
    console.log(localStorageCopy);
    if(localStorageCopy){
        globalTaskData = localStorageCopy["tasks"];  //get the value of tasks object
    }
    globalTaskData.map((cardData) => {
        taskContents.insertAdjacentHTML('beforeend', generateTaskCard(cardData));  // show local storage data in the frontend
    })
}

const deleteTask = (e) => {
    const targetID =  e.getAttribute("name");
    globalTaskData = globalTaskData.filter((cardData) => cardData.id!==targetID);   // filter the IDs that doesn't match to target ID and update
    saveToLocalStorage();  
    window.location.reload();
}

const editTask = (e) => {
    const targetID =  e.getAttribute("name");
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].setAttribute("contenteditable","true");
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("contenteditable","true");
    e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].setAttribute("contenteditable","true");

    // e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("background", "green")     // manipulate css by using JS
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].setAttribute("onclick","saveEdit.apply(this,arguments)");
    e.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].innerHTML = "Save Changes";
}

// const saveEditTask = (e) => {
//     const targetID =  e.getAttribute("name");
//     globalTaskData.title = e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].value;
//     globalTaskData.description = e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].value;
//     globalTaskData.type = e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].value;
//     // e.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].setAttribute("contenteditable","true");
//     // e.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("contenteditable","true");
//     // e.parentNode.parentNode.parentNode.childNodes[5].childNodes[5].setAttribute("contenteditable","true");

//     saveToLocalStorage();  
//     // window.location.reload();
// }
// const saveEditTask = (e) => {
//     if (!e) e = window.event;
//     const targetID = e.target.id;
    
    
//     const taskTitle = parentNode.parentNode.parentNode.childNodes[5].childNodes[1];
//     const taskDescription = parentNode.parentNode.parentNode.childNodes[5].childNodes[3];
//     const taskType = parentNode.parentNode.parentNode.childNodes[5].childNodes[5];
//     const updateData = {
//       taskTitle: taskTitle.innerHTML,
//       taskDescription: taskDescription.innerHTML,
//       taskType: taskType.innerHTML,
//     };

//     let stateCopy = state.taskList;
//     stateCopy = stateCopy.map((task) =>
//     task.id === targetID
//         ? {
//             id: task.id,
//             title: updateData.taskTitle,
//             description: updateData.taskDescription,
//             type: updateData.taskType,
//             url: task.url,
//         }
//         : task
//     );

//     state.taskList = stateCopy;
//     saveToLocalStorage();
// }

const saveEdit = (e) => {
    if (!e) e = window.event;
    const targetID = e.target.id;

    const submitButton = e.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[1];
    const taskTitle = e.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[1];
    const taskDescription = e.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[3];
    const taskType = e.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[5];
    const updateData = {
      taskTitle: taskTitle.innerHTML,
      taskDescription: taskDescription.innerHTML,
      taskType: taskType.innerHTML,
    };
  
    let stateCopy = globalTaskData;
    stateCopy = stateCopy.map((task) =>
      task.id === targetID
        ? {
            id: task.id,
            title: updateData.taskTitle,
            description: updateData.taskDescription,
            type: updateData.taskType,
            url: task.url,
          }
        : task
    );
  
    globalTaskData = stateCopy;
    saveToLocalStorage();
    taskTitle.setAttribute("contenteditable", "false");
    taskDescription.setAttribute("contenteditable", "false");
    taskType.setAttribute("contenteditable", "false");
    submitButton.setAttribute("onclick", "openTask.apply(this, arguments)");
    submitButton.setAttribute("data-bs-toggle", "modal");
    submitButton.setAttribute("data-bs-target", "#showTask");
    submitButton.innerHTML = "Open Task";
  };
