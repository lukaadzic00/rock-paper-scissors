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
    div.innerHTML = "<p>Human Choice: " + humanChoice + "</p>";
    div.innerHTML += "<p>Computer Choice: " + computerChoice + "</p>";
    
    if(humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        div.innerHTML += "<p>You won!</p>";
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        div.innerHTML += "<p>You lost!</p>";
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        div.innerHTML += "<p>You won!</p>";
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        div.innerHTML += "<p>You lost!</p>";
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        div.innerHTML += "<p>You won!</p>";
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        div.innerHTML += "<p>You lost!</p>";
    } else {
        div.innerHTML += "<p>It's tied</p>";
    }

    div.innerHTML += "<p>Human Score: " + humanScore + "</p>";
    div.innerHTML += "<p>Computer Score: " + computerScore + "</p>";

    if(humanScore === 5) {
        div.innerHTML += "<p>YOU ARE THE WINNER!!!";
        choices.forEach(btn => {
            btn.removeEventListener('click', handleClick);
        });
    }
    
    if(computerScore === 5) {
        div.innerHTML += "<p>You lost :( Better luck next time";
        choices.forEach(btn => {
            btn.removeEventListener('click', handleClick);
        });
    }
}

function handleClick(e) {
    const humanChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());

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

const btnRock = document.createElement('button');
btnRock.textContent = 'Rock';
const btnPaper = document.createElement('button');
btnPaper.textContent = 'Paper';
const btnScissors = document.createElement('button');
btnScissors.textContent = 'Scissors';
const body = document.querySelector('body');

const choices = [btnRock, btnPaper, btnScissors];
choices.forEach(btn => {
    btn.style.height = '50px';
    btn.style.width = '100px';
    btn.style.margin = '20px';
    btn.style.textAlign = 'center';
    btn.style.fontSize = '20px';
    btn.style.backgroundColor = 'lightblue';

    btn.addEventListener('click', handleClick);
});

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

const div = document.createElement('div');
body.appendChild(div);

