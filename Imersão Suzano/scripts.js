function addListItem(task){
    const tasklist = document.getElementById("listaDeTarefas")
    const listItem = document.createElement("li")

    const btnRemove = createRemoveBtn()
    const taskText = createTaskText(task)

    listItem.appendChild(btnRemove)
    listItem.appendChild(taskText)

    tasklist.appendChild(listItem)
}

function createRemoveBtn(){
    const btnRemove = document.createElement("button")
    btnRemove.innerHTML = "Remover"
    btnRemove.onclick = removeElement
    btnRemove.className = "btn-remove"

    return btnRemove
}


function removeElement(){
    this.parentElement.remove();
}

function createTaskText(text){
    const taskText = document.createElement("span")
    taskText.class = "task-span"
    taskText.textContent = text

    return taskText
}

function createListElement(){
    const inputUsuario = document.getElementById('inputUsuario')
    const task = inputUsuario.value

    if(task.length > 0){
        addListItem(task)
    } else{
        alert("Escreva uma tarefa válida!")
    }
}

