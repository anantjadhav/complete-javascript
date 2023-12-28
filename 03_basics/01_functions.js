// functions

/* function sayMyName() {
    console.log("A");
    console.log("n");
    console.log("a");
    console.log("n");
    console.log("t");
}

sayMyName() */

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

let result = addTwoNumbers(4,6);

console.log("Result is ", result);

function logMessage(userName) {
    if (!userName) {
        console.log("Please enter a username");
        return
    }

    return `${userName} just logged in`;
}

console.log(logMessage());