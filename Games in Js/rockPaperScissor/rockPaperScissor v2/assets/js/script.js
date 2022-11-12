//variable declaration

const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");

const gameGrid = document.getElementById("game");

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay); 

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;
// function declaration


const handleClick = (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = `User choice: ${userChoice}`;
    generateComputerChoice();
    getResult();
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = `Computer choice: ${randomChoice}`
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement("button");
    button.id = choices[i];
    button.innerHTML = choices[i];
    gameGrid.appendChild(button);
    button.addEventListener("click", handleClick)
}


const getResult = () => {
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            resultDisplay.innerHTML = "You Win!"
            break
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            resultDisplay.innerHTML = "You Lose!"
            break
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            resultDisplay.innerHTML = "Draw!"
            break
    }
}
