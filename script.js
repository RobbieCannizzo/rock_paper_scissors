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
    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();
    if ((playerSelection === 'Rock') && (computerSelection === 'Rock')) {
        return tie_RR;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        computerScore += 1;
        return lose_RP;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissor')) {
        playerScore += 1;
        return win_RS;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        playerScore += 1;
        return win_PR;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Paper')) {
        return tie_PP;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissor')) {
        computerScore += 1;
        return lose_PS;
    } else if ((playerSelection === 'Scissor') && (computerSelection === 'Rock')) {
        computerScore += 1;
        return lose_SR;
    } else if ((playerSelection === 'Scissor') && (computerSelection === 'Paper')) {
        playerScore += 1;
        return win_SP;
    } else if ((playerSelection === 'Scissor') && (computerSelection === 'Scissor')) {
        return tie_SS;
    } 
    
}

function game() {
    //for (let i = 0; i < 5; i++) {
        //playerSelection = prompt("Choose Rock, Paper, or Scissor!");
        //console.log(playRound(playerSelection, getComputerChoice()));
   // }
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


//UI
const btn = document.querySelector("body");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

btn.appendChild(rockBtn);
rockBtn.textContent = "Rock";
rockBtn.value = "Rock";

btn.appendChild(paperBtn);
paperBtn.textContent = "Paper";

btn.appendChild(scissorBtn);
scissorBtn.textContent = "Scissor";

btn.addEventListener('click', function(event) {
    const div = document.querySelector("body");
    const roundText = document.createElement("div");
    div.appendChild(roundText);
    roundText.textContent = playRound(event.target.textContent, getComputerChoice());
    console.log(playerScore);
    if (playerScore === 5) {
        alert("You won!");
    } else if (computerScore === 5) {
        alert("You lose!");
    }
});
