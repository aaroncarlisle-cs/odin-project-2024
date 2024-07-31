function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = 'rock';
        case 1:
            choice = 'paper';
        case 2:
            choice = 'scissors';
    }
    console.log(`Computer's choice is: ${choice}`);
    return choice;
}

function getHumanChoice() {
    let choice = prompt('Please enter rock, paper, or scissors');
    choice = choice.toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        console.log(`Player's choice is: ${choice}`);
        return choice;
    }
    else {
        alert('Invalid choice!');
        getHumanChoice();
    }
}

getComputerChoice();
getHumanChoice();