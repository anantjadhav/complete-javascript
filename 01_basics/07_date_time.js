// DATES JAN 01 1970

let TodayDate = new Date();

/* console.log(TodayDate.toString());
console.log(TodayDate.toDateString());
console.log(TodayDate.toLocaleString());
console.log(typeof TodayDate); */

let myCreatedDate = new Date(1988, 2, 19)

/* console.log(myCreatedDate.toDateString()); */

let myTimeStamp = Date.now();

/* console.log(myTimeStamp); */

//dates method

console.log(TodayDate.getDate());
console.log(TodayDate.getDay());
console.log(TodayDate.getFullYear());
console.log(TodayDate.getMonth() + 1);
console.log(TodayDate.getMinutes());