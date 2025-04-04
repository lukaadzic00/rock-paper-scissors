function getComputerChoice() {
    let num = Math.random();
    if(num < 1/3) {
        return "rock";
    } else if( num < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let unos = prompt("Enter Rock/Paper/Scissors: ");
    return unos.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    
    if(humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You won!");
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lost!");
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You won!");
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lost!");
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You won!");
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lost!");
    } else {
        console.log("It's tied");
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore) {
        console.log("You are the winner!");
    } else if(humanScore < computerScore) {
        console.log("You lost. Better luck next time");
    } else {
        console.log("It's tied.");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();