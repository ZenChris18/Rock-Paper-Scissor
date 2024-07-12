let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    return number
}
function getHumanChoice(){
    let human
    let pick = prompt("Enter you choice (rock, paper, scissors)").toLowerCase();
    if(pick === "rock"){
        human = 0;
    }
    else if(pick === "paper"){
        human = 1;
    }
    else if(pick === "scissors"){
        human = 2;
    }
    else{
        console.log("Pick from the Choices only")
    }
    return human
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("TIE!")
    }
    else if(humanChoice != computerChoice){
        if(humanChoice=== 0){
            if(computerChoice === 1){
                console.log("You lose! You picked rock while the computer picked paper");
            }
            else if(computerChoice === 2){
                console.log("You win! You picked rock while the computer picked scissors");
            }
        }
        else if(humanChoice ===1){
            if(computerChoice === 0){
                console.log("You Win! You picked paper while the computer picked rock");
            }
            else if(computerChoice === 2){
                console.log("You Lose! You picked paper while the computer picked scissors");
            }
        }
        else if(humanChoice === 2){
            if(computerChoice === 0){
                console.log("You Lose! You picked scissors while the computer picked rock");
            }
            else if(computerChoice === 1){
                console.log("You win! You picked scissors while the computer picked paper");
            }
        }
    }
}



function playGame(){
    let i =0;
    let times = 5;
    for(let i = 0; i < times; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();
