// const myArray = ["a","b","c"];
// console.log(myArray)
//////////////---first Exercise---//////////////
const addToArray = (array, itemToAdd) => {
    return array.push(itemToAdd)
};

const removeFromArray = (array) => {
    return array.pop()
};
//////////////---second Exercise---//////////////
const addToStart = (array, itemToAdd) => {
    return array.unshift(itemToAdd)
};

const removeFromStart = (array) => {return array.shift()};

//////////////---third Exercise---//////////////
// const myArray = ["a","b","c"];
const returnNextItem = (array,string) => {
    if (array.includes(string) === false) {
        return false
    } else if (array.indexOf(string) >= 0) {
        let i = (array.indexOf(string,)+1)
        x = (array.slice(i,i+1))
        console.log(x)
    } 
};
//////////////---fourth Exercise---//////////////
const myArray = ["a","b","c","d"];
const returnChunks = (array, string1, string2) => {
    let x = array.indexOf(string1)
    let y = array.indexOf(string2)
    if (array.includes(string1)  === false || array.includes(string2) === false) {
        return "false"
    } else {
        return array.slice(x,y+1)
    }
}