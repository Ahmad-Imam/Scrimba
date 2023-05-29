let scoreHome = document.getElementsByClassName("scoreh")[0].textContent = 0;
let scoreGuest =document.getElementsByClassName("scoreg")[0].textContent = 0;


function increaseH1(){
    scoreHome+=1;
    document.getElementsByClassName("scoreh")[0].textContent =scoreHome;
    console.log(scoreHome);    
}
function increaseH2(){
    scoreHome+=2;
      document.getElementsByClassName("scoreh")[0].textContent =scoreHome;
    console.log(scoreHome);    
}
function increaseH3(){
    scoreHome+=3;
      document.getElementsByClassName("scoreh")[0].textContent =scoreHome;
    console.log(scoreHome);    
}


function increaseG1(){
    scoreGuest+=1;
    document.getElementsByClassName("scoreg")[0].textContent =scoreGuest;
    console.log(scoreGuest);    
}
function increaseG2(){
    scoreGuest+=2;
      document.getElementsByClassName("scoreg")[0].textContent =scoreGuest;
    console.log(scoreGuest);    
}
function increaseG3(){
    scoreGuest+=3;
      document.getElementsByClassName("scoreg")[0].textContent =scoreGuest;
    console.log(scoreGuest);    
}

function reset(){
     scoreHome = document.getElementsByClassName("scoreh")[0].textContent = 0;
 scoreGuest =document.getElementsByClassName("scoreg")[0].textContent = 0;
}

