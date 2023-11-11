const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) //or 3
    console.log(randomNumber)

    if(randomNumber === 0){
        computerChoice = 'rock'
    }
    if (randomNumber === 1){
        computerChoice = 'scissor'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'you lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'you win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost!'
    }
    if(computerChoice === 'scissor' && userChoice === 'paper'){
        result = 'you lost!'
    }
    if(computerChoice === 'scissor' && userChoice === 'rock'){
        result = 'you win!'
    }
    resultDisplay.innerHTML = result
}