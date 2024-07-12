let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    return number;
}

function getHumanChoice(){
    let human;
    let pick = prompt("Enter your choice (rock, paper, scissors)").toLowerCase();
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
        console.log("Pick from the Choices only");
        return getHumanChoice(); // Ask again if invalid choice
    }
    return human;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("TIE!");
        return 'tie';
    }
    else if(humanChoice === 0 && computerChoice === 1){
        console.log("You lose! You picked rock while the computer picked paper");
        return 'computer';
    }
    else if(humanChoice === 0 && computerChoice === 2){
        console.log("You win! You picked rock while the computer picked scissors");
        return 'human';
    }
    else if(humanChoice === 1 && computerChoice === 0){
        console.log("You win! You picked paper while the computer picked rock");
        return 'human';
    }
    else if(humanChoice === 1 && computerChoice === 2){
        console.log("You lose! You picked paper while the computer picked scissors");
        return 'computer';
    }
    else if(humanChoice === 2 && computerChoice === 0){
        console.log("You lose! You picked scissors while the computer picked rock");
        return 'computer';
    }
    else if(humanChoice === 2 && computerChoice === 1){
        console.log("You win! You picked scissors while the computer picked paper");
        return 'human';
    }
}

function playGame(){
    let times = 5;
    for(let i = 0; i < times; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === 'human') {
            humanScore++;
        } else if (result === 'computer') {
            computerScore++;
        }

        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("you won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a draw!");
    }
}

playGame();
