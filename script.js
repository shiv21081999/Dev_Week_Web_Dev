let newTask = document.getElementById('newTask')
let btnAdd = document.getElementById('btnAdd')
let btnDel = document.getElementById('btnDel')
let taskList = document.getElementById('taskList')
tasks = []

function addTask(newTaskValue){
    if(newTaskValue)
    {
        tasks.push(newTaskValue)
    }
    newTask.value =''
}
function renderList(){
    taskList.innerHTML = ''
    for(let i = 0 ; i < tasks.length ; i++)
    {
        let item = document.createElement('li')
        item.innerText = tasks[i]
        taskList.appendChild(item)
    }
}
function deleteOne(){
    tasks.shift()
}
btnAdd.onclick = () =>{
    addTask(newTask.value)
    renderList()
}
newTask.addEventListener('keypress', (event) => {
    if(event.keyCode == 13)
    {
        addTask(newTask.value)
        renderList()
    }
})
btnDel.onclick = () => {
    deleteOne()
    renderList()
}

