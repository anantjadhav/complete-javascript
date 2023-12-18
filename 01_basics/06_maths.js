// NUMBERS AND MATHS IN JAVASCRIPT

let score = 500;

/* console.log(score); */

let balance = new Number(100);

/* console.log(balance); */

/* console.log(balance.toString().length);
console.log(balance.toFixed(2)); */

const otherNumber = 22.8996;

/* console.log(otherNumber.toPrecision(4)); */

const hundreds = 1000000;

/* console.log(hundreds.toLocaleString("en-IN")); */

// +++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++

/* console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(9.5));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.9));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.min(4,6,9,8,71,2,3));
console.log(Math.floor(Math.random()*10) + 1); */
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


