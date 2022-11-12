/*
write a function called tellFortune that take 4 argument

1. number of children
2 partner's name
3.location
4.job title

the function should print out a sentence in the following format

"You will be a $jobTitle in $location, married to $partner with $children kids."
*/

//function exercises 
function mySentence(jobTitle,location,name,kids = "no") {
 console.log ("you'll will be a " +jobTitle+ " in " +location+ " married to " +name+ " with " +kids+ " kids")
 };
mySentence() 

///////////////////////
//come back with a sentence with the circumference and area of a circle
function circle(radius) {
 let circumference = radius*2*Math.PI
 console.log(circumference.toFixed(2))
 let area = Math.pow(radius, 2)*Math.PI
 console.log(area.toFixed(2))
 console.log("the circumference is "+circumference.toFixed(2)+" and the area is "+ area.toFixed(2))

}
circle(10)

/////////////////////
//basic math. come back with a function that use add, subtract multiply divide. remember the rules about division 0


function basicMath(value1,value2,operator) {
    if (operator==="add") {
        return value1+value2
    } else if (operator==="sub") {
        return value1-value2
    } else if (operator==="mul") {
        return value1*value2
    } else if (operator==="divide" && value2===0) {
        return ("error you can't divide a number by 0")
    } else if (operator==="divide") {
        return value1/value2
    }
}
/////////////////////
//function called randomized take 2 numbers as an arguments. min and max.  
//the function will return a pseudo random integer no decimal between the two numbers (inclusive)

function randomizer(x,y) {
    if (typeof x==="number" && typeof y==="number") {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    } else {
        return ("this is not a game. Pick a number!!!")
    }
}
////////////////////
//arrow function syntax 
//const name = (arguments) => {do stuff};

const fortune = (jobTitle,location,name,kids = "no") => {
    console.log ("you'll will be a " +jobTitle+ " in " +location+ " married to " +name+ " with " +kids+ " kids")
    };

fortune("teacher", "oklaoma", "Ferguson", 27)
//////////////////

const cerchio = (radius) => {
    let circumference = radius*2*Math.PI
    console.log(circumference.toFixed(2))
    let area = Math.pow(radius, 2)*Math.PI
    console.log(area.toFixed(2))
    console.log("the circumference is "+circumference.toFixed(2)+" and the area is "+ area.toFixed(2))
   }
   cerchio(2)

   /////////////////

   const MathIsFun = (value1,value2,operator) => {
    if (operator==="add") {
        return value1+value2
    } else if (operator==="sub") {
        return value1-value2
    } else if (operator==="mul") {
        return value1*value2
    } else if (operator==="divide" && value2===0) {
        return ("error you can't divide a number by 0")
    } else if (operator==="divide") {
        return value1/value2
    }
}
MathIsFun(4,26,"divide")

////////////////////////////

const randomizerThis = (x,y) => {
    if (typeof x==="number" && typeof y==="number") {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    } else {
        return ("this is not a game. Pick a number!!!")
    }
}
///////////////////////

