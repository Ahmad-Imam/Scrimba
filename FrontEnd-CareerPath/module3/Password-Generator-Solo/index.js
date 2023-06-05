const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const normalCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let passwordFirst = document.querySelector(".password-1");
let passwordSecond = document.querySelector(".password-2");

function copyFirst(){
    let copyText = document.querySelector(".password-1").textContent;
//   copyText.select();
    document.execCommand("copy");
    console.log(copyText+ " Copied to clipboard");
}
function copySecond(){
    let copyText = document.querySelector(".password-2").textContent;
//   copyText.select();
    document.execCommand("copy");
    console.log(copyText+ " Copied to clipboard");
}

function generatePass(){
    let password1 = "";
    let password2 = "";
    for(let i = 0; i<15;i++ ){
        let randomChar1 = Math.floor(Math.random()*characters.length)
        let randomChar2 = Math.floor(Math.random()*characters.length)
        password1 += characters[randomChar1];
        password2 += characters[randomChar2];
    }
  
    passwordFirst.textContent = password1;
    passwordSecond.textContent = password2;
}

function generateNormalPass(){
    let password1 = "";
    let password2 = "";
    for(let i = 0; i<15;i++ ){
        let randomChar1 = Math.floor(Math.random()*normalCharacters.length)
        let randomChar2 = Math.floor(Math.random()*normalCharacters.length)
        password1 += normalCharacters[randomChar1];
        password2 += normalCharacters[randomChar2];
    }
    passwordFirst.textContent = password1;
    passwordSecond.textContent = password2;
}

