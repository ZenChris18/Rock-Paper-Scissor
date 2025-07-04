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
    const win = 5;
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    let humanScore = document.getElementById("humanScore");
    let computerScore = document.getElementById("computerScore");
    const winner = document.getElementById("winner");
    let human = 0;
    let computer= 0;
    let gameOver = false;


    function gameWinner(){
        if(human === win){
        winner.textContent = "Human wins!"
        return gameOver = true;
        }
        else if(computer === win){
            winner.textContent = "Computer wins!"
            return gameOver = true;
        }
    }

    rock.addEventListener('click', function(){
        if(gameOver) return;
        let computerChoice = getComputerChoice();
        if((playRound(0, computerChoice)) === "human"){
            human+=1;
            humanScore.textContent = human;
        }
        else{
            computer+=1;
            computerScore.textContent = computer;
        }
        gameWinner();
    })

    paper.addEventListener('click', function(){
        if(gameOver) return;
        let computerChoice = getComputerChoice();
        if((playRound(1, computerChoice)) === "human"){
            human+=1;
            humanScore.textContent = human;
        }
        else{
            computer+=1;
            computerScore.textContent = computer;
        }
        gameWinner();
    })

    scissors.addEventListener('click', function(){
        if(gameOver) return;
        let computerChoice = getComputerChoice();
        if((playRound(2, computerChoice)) === "human"){
            human+=1;
            humanScore.textContent = human;
        }
        else{
            computer+=1;
            computerScore.textContent = computer;
        }
        gameWinner();
    })
    
}

playGame();
