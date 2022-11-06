const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDE_CLASSNAME = 'hide';
const USERNAME_KEY = 'username';
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginForm.classList.remove(HIDE_CLASSNAME);
    loginForm.addEventListener('submit',onLogomSubmit);
} else {
    paintGreetings(savedUsername);
}

function paintGreetings(username){
    greeting.classList.remove(HIDE_CLASSNAME);
    greeting.innerText = `Hello  ${username}`;
}


function onLogomSubmit(e) {
    e.preventDefault();
    this.classList.add(HIDE_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreetings(userName);
}