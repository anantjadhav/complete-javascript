// ARRAYS

let arr = [1,2,3,4,5,6];
let myArr = [7,8,9,10];
console.log(arr);

// arry methods
// push method - add item at end of the array
arr.push(7);
console.log(arr);

// pop method - remove last item of the array
arr.pop();
console.log(arr);

//unshift method - add item start of the array
arr.unshift(10);
console.log(arr);

// shift methold - remove first item of the array
arr.shift()
console.log(arr);

// includes method - search element in the array 
console.log(arr.includes(6));
console.log(arr.includes(9));

// indexOf method - find the index of searched array
console.log(arr.indexOf(6));

// join method - convert array into the string with comma separated
console.log(arr.join(myArr));

// slice method - take part from orginal array but not manipulate the original array
console.log(arr.slice(1,3));
// original array as it is
console.log(arr);

// splice method - removed the mentioned range from the original array 
console.log(arr.splice(1,3));
// original array also modified
console.log(arr);

// merge two arrays using spread operator
let myBooks = ["abc", "bbc", "ccd"];
let myCars = ["ford", "audi", "bmw"];

let allProperty = [...myBooks, ...myCars];

console.log(allProperty);

// merge two arrays using concat operator
let concatArray = [myBooks.concat(myCars)];
console.log(concatArray);

// flat method - when we have nested array using flat method convert into the single array
const anotherArray = [1, 2, 3, [4, 5], 6, 7, [8, 9, 10]];
const real_anotherArray = [anotherArray.flat(Infinity)];
console.log(real_anotherArray);

//isArray method check arrays 
console.log(Array.isArray(anotherArray));
console.log(Array.isArray("anotherArray"));

// convert anything to array
console.log(Array.from("Anant"));

// convert multiple elements into the array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));