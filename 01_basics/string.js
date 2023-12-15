//STRINGS
let myName = 'Anant Jadhav';

let myDesignation = new String("Web Developer");

/* console.log(`Hello user, How are you! My Name is ${myName}`); */

/* console.log(myDesignation.length); */

/* console.log(myName.toLocaleUpperCase()); */

/* console.log(myDesignation.charAt(4)); */

// STRING METHOD
//Substring
/* let mySubString = myName.substring(0, 4); */

/* console.log(mySubString); */

// slice
let anotherString = myName.slice(1, 4);

/* console.log(anotherString); */

// TRIM method
let TrimStr = "  anantjadhav  ";

console.log(TrimStr);
console.log(TrimStr.trim());

// replace method in string
let myString = 'https://www.w3sch%20ools.com/css/default.asp';

console.log(myString.replace('%20', '-'));

// includes method in string
console.log(myString.includes('w3s'));

//split method in string
console.log(myName.split(' '));