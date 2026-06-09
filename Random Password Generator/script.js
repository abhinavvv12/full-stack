const generatePass = document.querySelector('.generate');

const passwordBox = document.getElementById('getPass');
const length = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}-=+[]/";

const allChars = UpperCase+loweCase+number+symbol;

function CreatePassword(){
    let password = "";
    password+=UpperCase[Math.floor(Math.random() * UpperCase.length)]
    password+=loweCase[Math.floor(Math.random() * loweCase.length)]
    password+=number[Math.floor(Math.random() * number.length)]
    password+=symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length){
        password+=allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password; 
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

// generatePass.addEventListener('click',CreatePassword());