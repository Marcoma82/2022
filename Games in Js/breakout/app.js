//Dom selection
const boardGame = document.querySelector(".boardGame")
const ball = document.querySelector(".ball")
const user = document.querySelector(".user")


//Variable Declaration
const width = 800;
const height = 600;
let lastRenderTime = 0
let speed = 240

let ballDiameter = 20;
let xDirection = +2;
let yDirection = +2;

let userWidth = 200
let userHeight = 20
let userPosition = [(width/2) - (userWidth/2), 50];
let ballPosition = [userPosition[0] + (userWidth/2) - ballDiameter/2, userPosition[1] + ballDiameter];

// Style changes
boardGame.style.width =width + "px";
boardGame.style.height = height + "px"
boardGame.style.border = "1px solid black";

user.style.width = 200 + `px`
user.style.height = 20 + `px`
user.style.backgroundColor = "blue"


//bricks

const blockWidth = 80
const blockHeight = 20

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(10, 550),
    new Block(110, 550),
    new Block(210, 550),
    new Block(310, 550),
    new Block(410, 550),
    new Block(510, 550),
    new Block(610, 550),
    new Block(710, 550),
    new Block(10, 520),
    new Block(110, 520),
    new Block(210, 520),
    new Block(310, 520),
    new Block(410, 520),
    new Block(510, 520),
    new Block(610, 520),
    new Block(710, 520),
    new Block(10, 490),
    new Block(110, 490),
    new Block(210, 490),
    new Block(310, 490),
    new Block(410, 490),
    new Block(510, 490),
    new Block(610, 490),
    new Block(710, 490),
]


function drawBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = blocks[i].bottomLeft[0] + "px"
        block.style.bottom = blocks[i].bottomLeft[1] + "px"
        boardGame.appendChild(block);
    }
}
drawBlocks()

//check for collition with the blocks
//remove block from array
function bricksCollision() {
    for (let i = 0; i < blocks.length; i++){
        if
        (
          (ballPosition[0] >= blocks[i].bottomLeft[0] && ballPosition[0] <= blocks[i].bottomRight[0]) &&
          ((ballPosition[1] + ballDiameter) >= blocks[i].bottomLeft[1] && ballPosition[1] <= blocks[i].topLeft[1]) 
        )
          {
          const allBlocks = Array.from(document.querySelectorAll('.block'))
          allBlocks[i].classList.remove('block')
          blocks.splice(i,1)
          changeDirection()
        }
        
    }
}





//Ball 
function moveBall() {
    ballPosition[0] += xDirection;
    ballPosition[1] += yDirection;
}

function ballCollision() {
    if (ballPosition[0] >= width - ballDiameter ||
        ballPosition[1] >= height - ballDiameter
        ) {
        changeDirection()
    }
    if (ballPosition[0] <= 1 || ballPosition[1] <=0) {
        changeDirection()
    }
    if (ballPosition[1] <= 0) {
        cancelAnimationFrame(stopId)
    }
}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        xDirection = 2
        yDirection = -2
    } else if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        yDirection = -2
    } else if (xDirection === -2 && yDirection === -2) {
        xDirection = -2
        yDirection = 2
    } else if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        yDirection = 2
    }
}

//User
function gameMove(e) {
    if (e.key ==  "a") {
            userPosition[0] -= 10;
    }
    if (e.key ==  "d") {
        userPosition[0] += 20;
    }
    if (userPosition[0] <= 0) {
        userPosition[0] = 0
    }
    if (e.key == " ") {    
        toggleAnimation()
    }
    if ( userPosition[0] >= (width - userWidth))
    userPosition[0] = (width - userWidth)
}

   function userHitBall() {
    if (
    (ballPosition[0] >= userPosition[0] && ballPosition[0] <= userPosition[0] + (userWidth /2)) &&
        (ballPosition[1] >= userPosition[1]  && ballPosition[1] < userPosition[1] + userHeight)
    )
        {
            xDirection = -2
            yDirection = +2
    } 
    if (
    (ballPosition[0] >=userPosition[0] + (userWidth /2) && ballPosition[0] <= userPosition[0] + userWidth) &&
    (ballPosition[1] >= userPosition[1] && ballPosition[1] < userPosition[1] + userHeight)
     )
      {
        xDirection = +2
        yDirection = +2
    }

   }

document.addEventListener ("keydown", gameMove)

//Main function

function update() {
    moveBall()
    ballCollision()
    userHitBall()
    bricksCollision() 
}

function draw() {
    ball.style.left = ballPosition[0] + `px`
    ball.style.bottom = ballPosition[1] + `px`
    user.style.left = userPosition[0] + `px`
    user.style.bottom = userPosition[1] + `px`
}
draw()

// Game Loop and toggle button
let toggle = false;

function gameLoop(currentTime) {
    secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    stopId = window.requestAnimationFrame(gameLoop);
    if (secondsSinceLastRender < 1 / speed) return
    draw()
    update()
    lastRenderTime = currentTime
}

function toggleAnimation() {
    if (!toggle) {
        toggle = true;
       window.requestAnimationFrame(gameLoop)
    } else {
        toggle = false;
        cancelAnimationFrame(stopId)
    }
}



