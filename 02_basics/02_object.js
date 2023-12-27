// OBJECTS

// object literals
const mysym = Symbol("key1");

const youTubeUser = {
    name: "Anant Jadhav",
    id: 1,
    [mysym]: "mykey1",
    subscribers: 100000,
    age: 35
}

// we can access the object using two methods 1] dot notations 2] bracket notations

/* console.log(youTubeUser.name);
console.log(youTubeUser["id"]); */



/* console.log(youTubeUser[mysym]);

console.log(youTubeUser); */

/* Object.freeze(youTubeUser); */

/* youTubeUser.name = "anantjadhav"; */

/* console.log(youTubeUser); */

youTubeUser.greeting = function() {
    console.log("Hello youtube user");
}

youTubeUser.greetingTwo = function() {
    console.log(`Hello youtube ${this.name}`);
}

/* console.log(youTubeUser.greeting());
console.log(youTubeUser.greetingTwo()); */

// how to merge two objects into one

let obj1 = {
    1: "a",
    2: "b"
}

let obj2 = {
    3: "c",
    4: "d"
}

/* let obj3 = Object.assign({}, obj1, obj2); */

let obj3 = {...obj1, ...obj2};

/* console.log(obj3); */

/* console.log(Object.keys(obj1));
console.log(Object.values(obj2));
console.log(Object.entries(obj1));

console.log(obj2.hasOwnProperty(3)); */

// OBJECT DESTRUCTURING

const {subscribers: sub} = youTubeUser;

console.log(sub);