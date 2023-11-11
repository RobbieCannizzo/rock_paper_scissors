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
        return tie_RR;
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        computerScore += 1;
        return lose_RP;
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissor')) {
        playerScore += 1;
        return win_RS;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        playerScore += 1;
        return win_PR;
    } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
        return tie_PP;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissor')) {
        computerScore += 1;
        return lose_PS;
    } else if ((playerSelection === 'scissor') && (computerSelection === 'rock')) {
        computerScore += 1;
        return lose_SR;
    } else if ((playerSelection === 'scissor') && (computerSelection === 'paper')) {
        playerScore += 1;
        return win_SP;
    } else if ((playerSelection === 'scissor') && (computerSelection === 'scissor')) {
        return tie_SS;
    } 
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose Rock, Paper, or Scissor!");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
    console.log(determineWinner())
}

function determineWinner() {
    if (playerScore > computerScore) {
        return 'You won the game!';
    } else if (computerScore > playerScore) {
        return 'You lost the game!';
    } else {
        return 'Its a tie! No one wins!'
    }
}

let tie_RR = 'Its a tie! You both played rock!';
let lose_RP = 'You lose! Paper beats rock!';
let win_RS = 'You win! Rock beats scissors!';
let win_PR = 'You win! Paper beats rock!';
let tie_PP = 'Its a tie! You both played paper!';
let lose_PS = 'You lose! Scissor beats paper!';
let lose_SR = 'You lose! Rock beats scissor!';
let win_SP = 'You win! Scissor beats paper!!';
let tie_SS = 'Its a tie! You both played scissor!';

let playerScore = 0;
let computerScore = 0;
game();
