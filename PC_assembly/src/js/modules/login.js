export function loginWindow(){
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const headerBtn = document.querySelector('.header__button');
const btnSign = document.querySelector('.sign__cross');


headerBtn.addEventListener('click', ()=>{
    container.style.display = 'block';
});

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

btnSign.addEventListener('click', ()=>{
    container.style.display = ''
});

}