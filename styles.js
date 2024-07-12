let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computer
    let number = Math.floor(Math.random() * 3);
    if(number === 0){
        computer = "rock";
    }
    else if(number === 1){
        computer = "scissors";
    }
    else{
        computer = "paper";
    }
    return computer
}
function getHumanChoice(){
    let pick = prompt("Enter you choice (rock, paper, scissors)")
    return pick
}


function playRound(humanChoice, computerChoice){
    
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection)
