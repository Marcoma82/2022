const age = prompt("What's your age?");
const square = Math.sqrt(age);
if(isNaN(age)) {
    console.log("ERROR, please insert a valid number")
} else if(age<0) {
    console.log("ERROR, please insert a valid number")
} else if(age<16) {
    console.log("Won't someone PLEASE thinks of the children?")
} else if(age>=16 && age<18) {
    console.log("Sorry, you're not old enough to come in. Drive on home, kid")
} else if(age>=18 && age<21) {
    console.log("Come on in, but no drinking")
} else if(age>=21) {
    console.log("Okay, get smashed")
};
if(age==21) {
    console.log("Happy 21st birthday!!!")
};
if(isNaN(age)) {
    
} else if (age%2!==0) {
    console.log("You're a odd one...")
};
if (square % 1 == 0) {
    console.log("Holy crap, you're a perfect square!")
};