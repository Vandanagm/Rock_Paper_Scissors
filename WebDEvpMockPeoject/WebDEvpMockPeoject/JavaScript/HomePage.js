const choices=['rock','paper','scissors'];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
const logout=document.getElementById("Logout")
let playerScore=0;
let computerScore=0;
let user=JSON.parse(localStorage.getItem("Current_User"));

function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random()*3)]; 
    console.log(computerChoice);

    let result="";

    if(playerChoice===computerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case"rock":
                result=(computerChoice==="scissors")? "YOU WIN!":"YOU LOSE!";
                break;
            case"paper":
                result=(computerChoice==="rock")? "YOU WIN!":"YOU LOSE!";
                break;
            case"scissors":
                result=(computerChoice==="paper")? "YOU WIN!":"YOU LOSE!";
                break;
        }
    }

    // console.log(userdata.firstname);
    
    playerDisplay.textContent=`User - ${user.firstname}: ${playerChoice}`;
    playerDisplay.style.color="green";
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greenText","redText")
    switch(result){
        case "YOU WIN!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent=playerScore;
        break;
        case "YOU LOSE!":
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent=computerScore;
        break;
    }

}

let Logout=()=>{
    window.location.href="Login.html";
    localStorage.removeItem("Current_User")
}
