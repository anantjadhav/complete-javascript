// stack and heap memory in javascript

//stack memory - all primitives data types saved in the stack memory
// return output copy of original property
let myName = "Anant Jadhav";

let myAnotherName= myName;

myAnotherName = "Jadhav Anant";

console.log(myName);
console.log(myAnotherName);


//heap memory - all non primitive data types saved in the heap memory
// return reference of original property

let myInfo = {
    email: "test@test.com",
    id: 1,
}

let myInfo2 = myInfo;

myInfo2.email = "anant@google.com";

console.log(myInfo);
console.log(myInfo2);