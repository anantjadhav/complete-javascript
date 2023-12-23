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

console.log(youTubeUser.greeting());
console.log(youTubeUser.greetingTwo());