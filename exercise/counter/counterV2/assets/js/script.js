// Variable Declaration
const buttons = document.querySelectorAll(".btn");
const countDisplay = document.querySelector(".count");
let count = 0;
// Function declaration 
buttons.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        if (e.target.classList.contains("minus") === true) {
            count--
        } if (e.target.classList.contains("plus") === true) {
            count++
        }
        if (e.target.classList.contains("reset") === true) {
            count = 0
        };
        countDisplay.innerHTML = count;
    })
});
