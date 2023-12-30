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


// add multiple values in the function ex shopping cart

function calculateShoppingCart(...item) {
    return item;
}

console.log(calculateShoppingCart(200, 300, 400, 500, 600, 900));

//  how to access object properties in the function

let regUser = {
    fullName: "anant Jadhav",
    passion: "coding"
}

function accessObject(myobject) {
    console.log(`user name is ${myobject.fullName} and his passion is ${myobject.passion}`);
}

accessObject(regUser);


const newArray = [123,456,789,845,621];

function accessArray(getArray) {
    return getArray[0];
}

console.log(accessArray(newArray));