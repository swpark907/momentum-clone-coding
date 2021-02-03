// To-do list

const todoContainer = document.querySelector('.todo__container');
const todo = document.querySelector('.todo');
const todoList = document.querySelector('.todo__list');
const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
let toDos = [];




function deleteList(target) {    // Delete To-do
    const parentNode = target.parentNode;    
    parentNode.remove();    
    const removeTodo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(parentNode.id);
    })

    toDos = removeTodo;
    saveTodos();        
}

function saveTodos(){
    const toDosStringify = JSON.stringify(toDos);
    localStorage.setItem("todo", toDosStringify);
}

function paintTodo(text){
    const delBtn = document.createElement('button');
    const li = document.createElement('li');        
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener('click', (event) => {
        deleteList(event.target);        
    })
    li.innerText = text;    
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newId
    }
    toDos.push(todoObj);
    saveTodos();
    
}

function loadTodo(){        
    if(localStorage.getItem('todo') != null) {
        const getTodo = localStorage.getItem('todo');
        const parsedToDos = JSON.parse(getTodo);
        parsedToDos.forEach(function(toDo) {
            paintTodo(toDo.text);
        })   
    } 
}

function makeTodo(){
    todoForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        const currentTodoValue = todoInput.value;
        if(currentTodoValue != null){       
        
        paintTodo(currentTodoValue); 
        todoInput.value = "";        
        }
    })
    loadTodo();
    if(localStorage.getItem(USER_LS) != null){
        show(todoContainer);
    }    
}
makeTodo();