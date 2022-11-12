const toDoList = [];

let input = prompt("What do you want to do?").toLowerCase();

const newToDo = () => {
    toDoList.push(prompt("what do u want to add?"));
}
const removeToDo = () => {
    const findToDo = toDoList.indexOf(prompt("what do u want to remove?"))
    if (findToDo !== -1){
        console.log("I'm removing " + toDoList[findToDo]);
        toDoList.splice(findToDo, 1);
    } else {
        console.log("This wasn't listed!");
    }
};
const rename = () => {
    const findToDo = toDoList.indexOf(prompt("what do u want to find?"))
    let changeToNew = prompt("what do u want to add instead?")
    if (findToDo !== -1){
        console.log("I'm removing " + toDoList[findToDo] + ". " + "I'm adding " + changeToNew + " instead");
        toDoList.splice(findToDo, 1, changeToNew);
    } else {
        console.log("This wasn't listed!")

    }
};
while (input !== "quit") {
    if (input === "show") {
        console.log(toDoList);
    } else if (input === "new") {
        newToDo();
    } else if (input === "remove") {
        removeToDo();
    } else if (input === "rename") {
        rename()
    }
    input = prompt("Ok, what do u want to do now?").toLowerCase();
};
console.log("Done!");

