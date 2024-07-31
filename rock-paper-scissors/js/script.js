let computerScore = 0;
let humanScore = 0;
let totalRounds = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    console.log(`Computer's choice is ${choice}`);
    return choice;
}

function getHumanChoice() {
    let choice = prompt('Please enter rock, paper, or scissors');
    if (choice) choice = choice.toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        console.log(`Player's choice is: ${choice}`);
        return choice;
    }
    else {
        alert('Invalid choice!');
        getHumanChoice();
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log('Draw!');
        return;
    }
    switch (computerChoice) {
        case 'rock': 
            (humanChoice == 'scissors') ? computerScore++ : humanScore++;
            break;
        case 'paper':
            (humanChoice == 'rock') ? computerScore++ : humanScore++;
            break;
        case 'scissors':
            (humanChoice == 'paper') ? computerScore++ : humanScore++;
            break;
    }
    console.log(`Computer's score: ${computerScore}`);
    console.log(`Player's score: ${humanScore}`);
}

function playGame() {
    while (totalRounds < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        totalRounds++;
    }
}

playGame();