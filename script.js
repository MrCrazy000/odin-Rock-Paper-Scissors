function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock'
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        return 'paper'
    } else if (randomNumber > 0.66) {
        return 'scissors'
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Write your choice. (rock, paper, scissors)');
    let lowerHumanChoice = humanChoice.toLowerCase();
    return lowerHumanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('AI Won!')
        computerScore++
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You won!')
        humanScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('AI Won!')
        computerScore++
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You won!')
        humanScore++
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('AI Won!')
        computerScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You won!')
        humanScore++
    } else {
        console.log("It's a draw!")
    }
    console.log(`You chose: ${humanChoice}, AI chose: ${computerChoice}`);
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    console.log(`Your score is ${humanScore}`)
    console.log(`Computers score is ${computerScore}`)
}

playGame()