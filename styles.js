function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}


let choice = getComputerChoice();
let answer 

if(choice === 0){
    answer = "rock";
} 
else if (choice === 1){
    answer = "paper";
}
else{
    answer = "scissors"
}

console.log(answer)