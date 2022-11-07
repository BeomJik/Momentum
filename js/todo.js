const toDWrap = document.querySelector('.todo-wrap')
const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');
const btnToggle = toDoForm.querySelector('.btn-toggle');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.classList.add(`btn`);
    button.innerText = "❌";
    button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
} 

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null ) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function toggleToDo() {
    toDWrap.classList.toggle('on');
}

btnToggle.addEventListener(`click`,toggleToDo);
toDoInput.addEventListener(`click`, () => toDWrap.classList.add('on'));