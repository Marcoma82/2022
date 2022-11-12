// Variable Declaration

const squares = document.querySelectorAll(".square");

const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("timeLeft");
const score = document.getElementById("score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;


// Function Declaration
const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove("mole");
    });
    const randomMole = squares[Math.floor(Math.random() * squares.length)];
    randomMole.classList.add("mole");
    hitPosition = randomMole.id

};

const moveMole = () => {
    timerId = setInterval(randomSquare, 500)
}

moveMole();
const hitTheMole = squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (hitPosition == square.id) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});

hitTheMole;


const countDown = () => {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)

    }
}

let countDownTimerId = setInterval(countDown, 1000)
// Call the function






