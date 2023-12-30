// variable scope

if (true) {
   /*  let a = 10;
    const b = 20;
    var c = 30;     */
}

// console.log(a); // a is not defined because its block scoped
// console.log(b); // c is not defined because its block scoped
/* console.log(c); */ // c is print because var keyword has a global scope

// we can access global scope variables into the block scope but can't used block scoped in global scope

// nested scope

function one() {
    const username = "Anant Jadhav";

    function two() {
        const website = "youtube"
        console.log(username);
    }
    /* console.log(website); */
    two()
}
one()