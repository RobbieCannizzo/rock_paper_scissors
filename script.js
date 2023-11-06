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

getComputerChoice()
console.log(choice)
//console.log(getComputerChoice())

