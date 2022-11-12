// Variable declaration
const count = document.getElementById("count");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");


// Function declaration

reset.addEventListener("click", () => {
    count.innerHTML = 0
})

minus.addEventListener("click", () => {
    count.innerHTML = count.innerHTML -1
})

plus.addEventListener("click", () => {
    count.innerHTML = Number(count.innerHTML)+1
})
