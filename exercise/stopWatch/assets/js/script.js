//variable declaration
const buttons = document.querySelectorAll(".btn");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let sec = 0;
let min = 0;
// function

buttons.forEach(buttons => {
    buttons.addEventListener ("click", (e) => {
        if (e.target.classList.contains("start")) {

        
            console.log("click start!")
            myinterval = setInterval(function () {
                seconds.innerHTML = sec;
                sec++
                if (seconds.innerHTML == 59) {
                    sec = 0
                    min++;
                    console.log("its a minute")
                } else if (seconds.innerHTML <= 8) {
                    seconds.innerHTML = "0" + sec
                } else if (minutes.innerHTML <= 9) {
                    minutes.innerHTML = "0" + min
                } else if (minutes.innerHTML >= 9) {
                    minutes.innerHTML = min;
                }
            }, 10);

        } 
        if (e.target.classList.contains("stop")) {
            console.log("stop")
            clearInterval(myinterval)
        }
        if (e.target.classList.contains("reset")) {
            seconds.innerHTML = "00"
            minutes.innerHTML = "00"
            clearInterval(myinterval)
            console.log("stop and reset")
        }
    });
});


/*
setInterval(function () {
    seconds.innerHTML = sec;
    sec++
    if (seconds.innerHTML == 59) {
        sec = 0
        min++;
        console.log("its a minute")
    } else if (seconds.innerHTML <= 8) {
        seconds.innerHTML = "0" + sec
    } else if (minutes.innerHTML <= 9) {
        minutes.innerHTML = "0" + min
    } else if (minutes.innerHTML >= 10) {
        minutes.innerHTML = min;
    }
}, 10);

*/


/*
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

*/