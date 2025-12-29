rockBtn = document.querySelector('#rockBtn')
paperBtn = document.querySelector('#paperBtn')
scissorsBtn = document.querySelector('#scissorsBtn')
div = document.querySelector('#div')

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
let roundsPlayed = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        roundsPlayed++
        computerScore++
        div.textContent = 'Your Score: ' + humanScore + ' AI Score:' + computerScore
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        roundsPlayed++
        humanScore++
        div.textContent = 'Your Score: ' + humanScore + ' AI Score:' + computerScore
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        roundsPlayed++
        computerScore++
        div.textContent = 'Your Score: ' + humanScore + ' AI Score:' + computerScore
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        roundsPlayed++
        humanScore++
        div.textContent = 'Your Score: ' + humanScore + ' AI Score:' + computerScore
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        roundsPlayed++
        computerScore++
        div.textContent = 'Your Score: ' + humanScore + ' AI Score:' + computerScore
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        roundsPlayed++
        humanScore++
        div.textContent = 'Your Score: ' + humanScore + ' AI Score:' + computerScore
    } else {
        roundsPlayed++
        div.textContent = 'Your Score: ' + humanScore + ' AI Score:' + computerScore
    }
    console.log(`You chose: ${humanChoice}, AI chose: ${computerChoice}`);

    if (roundsPlayed >= 5) {
        if (humanScore > computerScore) {
            div.textContent = `🏆 You won! Final Score: ${humanScore}:${computerScore}`;
        } else if (humanScore < computerScore) {
            div.textContent = `😔 AI won! Final Score: ${humanScore}:${computerScore}`;
        } else {
            div.textContent = `🤝 Draw! Final Score: ${humanScore}:${computerScore}`;
        }
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        }

}

function playGame() {
    rockBtn.addEventListener('click', event =>
        playRound('rock', getComputerChoice())
    )
    paperBtn.addEventListener('click', event =>
        playRound('paper', getComputerChoice())
    )
    scissorsBtn.addEventListener('click', event =>
        playRound('scissors', getComputerChoice())
    )
}

playGame();