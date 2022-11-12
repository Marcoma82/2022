// variable Declaration
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

// user choice buttons listener
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e)=> {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice ();
    getResult();
}));


// generate a computer choice
function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; //or you can use *3
    if( randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "scissors"
    } else if (randomNumber === 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
} 

// generate the result
function getResult () {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    } else if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win"
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You win"
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You win"
    } else {
        result = "You lose"
    }
    resultDisplay.innerHTML = result
}
