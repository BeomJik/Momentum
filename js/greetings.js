const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const reName = document.querySelector('#rename');
const btnLogin = document.querySelector('#login');

const HIDE_CLASSNAME = 'hide';
const USERNAME_KEY = 'username';
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginForm.classList.remove(HIDE_CLASSNAME);
    loginForm.addEventListener('submit',onLogomSubmit);
    reName.classList.add(HIDE_CLASSNAME);
} else {
    paintGreetings(savedUsername);
}

reName.addEventListener('click',onReName);

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
    reName.classList.remove(HIDE_CLASSNAME);
   
}

function onReName(e) {
    e.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDE_CLASSNAME);
    loginForm.addEventListener('submit',onLogomSubmit);
    greeting.innerText = ``;
    reName.classList.add(HIDE_CLASSNAME);
    loginInput.focus();
}

// 이름 입력창 input 입력후 blur 되면 로그인 버튼 클릭이 된다.
loginInput.addEventListener('blur',function name(e) {
    let event = new MouseEvent('click', {
        'view' : window,
        'bubbles' : true,
        'cancelable' : true 
    });
    btnLogin.dispatchEvent(event);
});