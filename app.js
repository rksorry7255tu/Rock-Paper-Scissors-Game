let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =()=>{
    msg.innerText="game was draw, Play again!!!";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;

    }else{
       msg.innerText=`You lose, ${compChoice} beats your ${userChoice}` ;
    }
  }

const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    const compChoice =genCompChoice();
    console.log("comp choice= ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice ==="paper" ? false:true;
           
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock" ? true:false;
        }
        else if(userChoice==="scissors"){
            userWin=compChoice==="paper" ? true:false; 
        }
        showWinner(userWin, userChoice, compChoice);
        score(userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
      playGame(userChoice);
    });
});

let score=(userChoice,compChoice)=>{
    if(msg.innerText===`You win! Your ${userChoice} beats ${compChoice}`){
        userScore++;
        uscore.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else if(msg.innerText===`You lose, ${compChoice} beats your ${userChoice}` ){
        compScore++;
        cscore.innerText=compScore;
        msg.style.backgroundColor="red";
    }
}