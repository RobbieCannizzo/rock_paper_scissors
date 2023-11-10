function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    if (randomInt === 0) {
        return choice = "Rock";
    } else if (randomInt === 1) {
        return choice ="Paper"
    } else {
        return choice ="Scissor"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
        return 'Its a tie! You both played rock!';
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        return 'You lose! Paper beats rock!';
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissor')) {
        return 'You win! Rock beats scissors!';
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        return 'You win! Paper beats rock!';
    } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
        return 'Its a tie! You both played paper!';
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissor')) {
        return 'You lose! Scissor beats paper!';
    } else if ((playerSelection === 'scissor') && (computerSelection === 'rock')) {
        return 'You lose! Rock beats scissor!';
    } else if ((playerSelection === 'scissor') && (computerSelection === 'paper')) {
        return 'You win! Scissor beats paper!!';
    } else if ((playerSelection === 'scissor') && (computerSelection === 'scissor')) {
        return 'Its a tie! You both played scissor!';
    } 
    
}

//getComputerChoice()
//console.log(choice)
//console.log(getComputerChoice())

const playerSelection = "scissor";
const computerSelection = getComputerChoice();
console.log(choice);
console.log(playRound(playerSelection, computerSelection));
