const user = {
    username: "anant",
    price: 999,

    welcomeMessage: function() {
        /* console.log(`${this.username} , welcome to the website`);
        console.log(this); */
    }
}

user.welcomeMessage()

user.username = 'jadhav'

user.welcomeMessage()
// this refer to current context

/* console.log(this); */

/* function chai() {
    let username = 'Anant';
    console.log(this.username);
}

chai() */

// arrow function example

let hello = () => {
    let username = 'Jadhav';
    console.log(this.username);
}

hello()

// impicit arrow function

const addtwo = (num1, num2) => num1 + num2
const addthree = (num1, num2) => (num1 + num2)

console.log(addtwo(5,5));
console.log(addthree(10,5));