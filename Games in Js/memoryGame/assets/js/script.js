// variable declaration
const cardArray = [
    {
        name: "chops",
        img: "./images/chops.png",
    },
    {
        name: "fries",
        img: "./images/fries.png",
    },
    {
        name: "pasta",
        img: "./images/pasta.png",
    },
    {
        name: "penne",
        img: "./images/penne.png",
    },
    {
        name: "porkchop",
        img: "./images/porkchop.png",
    },
    {
        name: "salad",
        img: "./images/salad.png",
    },
    {
        name: "shrimp",
        img: "./images/shrimp.png",
    },
    {
        name: "soup",
        img: "./images/soup.png",
    },
    {
        name: "steak",
        img: "./images/steak.png",
    },
    {
        name: "chops",
        img: "./images/chops.png",
    },
    {
        name: "fries",
        img: "./images/fries.png",
    },
    {
        name: "pasta",
        img: "./images/pasta.png",
    },
    {
        name: "penne",
        img: "./images/penne.png",
    },
    {
        name: "porkchop",
        img: "./images/porkchop.png",
    },
    {
        name: "salad",
        img: "./images/salad.png",
    },
    {
        name: "shrimp",
        img: "./images/shrimp.png",
    },
    {
        name: "soup",
        img: "./images/soup.png",
    },
    {
        name: "steak",
        img: "./images/steak.png",
    },
];

const gridDisplay = document.querySelector(".grid");
let cardChosen = [];
let cardChosenIds = [];
const cardWon = [];
const resultDisplay = document.getElementById("result");
resultDisplay.textContent = "0"

// function declaration 

const sortCard = () => {
    cardArray.sort(() => Math.random() - 0.5)
    
};

const gameBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "./images/backcard.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)

    }
};

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500);

    }
};

const checkMatch = () => {
    const cards = document.querySelectorAll("img")
    if (cardChosenIds[0] === cardChosenIds[1]) {
        alert("u clicked twice")
        cards[cardChosenIds[0]].setAttribute("src", "./images/backcard.png")
    }
    if (cardChosen[0] === cardChosen[1]){
        cards[cardChosenIds[0]].setAttribute("src", "./images/blank.png")
        cards[cardChosenIds[1]].setAttribute("src", "./images/blank.png")
        cards[cardChosenIds[0]].removeEventListener("click", flipCard)
        cards[cardChosenIds[1]].removeEventListener("click", flipCard)
        cardWon.push(cardChosen[0])
        alert("You find a match")
    } else {
        cards[cardChosenIds[0]].setAttribute("src", "./images/backcard.png")
        cards[cardChosenIds[1]].setAttribute("src", "./images/backcard.png")

    };
    cardChosen = [];
    cardChosenIds = [];
    resultDisplay.textContent = cardWon.length
    if (cardWon.length === cardArray.length/2) {
        resultDisplay.textContent = ("you find them all")
    };
}

sortCard();
gameBoard();
