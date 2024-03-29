// for in loop

const arr = [1,2,3,4,5,6];

for (const val in arr) {
    /* console.log(val); */
}

// for of loop

const greeting = 'Hello Anant';

for (const greet of greeting) {
   /*  console.log(greet); */
}

// Maps

const map = new Map();

map.set("IN", "INDIA");
map.set("UK", "UNITED KINGDOM");

/* console.log(map); */

// for in loop

const myObject = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    cpp: "c++",
}

for (const key in myObject) {
   /* console.log(`${key} shortcut is for ${myObject[key]}`); */
}

const programming = ["js", "py", "ruby", "cpp"];

for (const key in programming) {
    /* console.log(programming[key]); */
}


// for each loop



const food = "salad"

switch (food) {
    case "oyster":
        console.log('The taste of the sea');
        break;
    case "pizza":
        console.log("A delicious pie");
    default:
        console.log('Enjoy your meal!');
        break;
}

const coding = ['js', 'python', 'cpp', 'java', 'ruby'];

/* coding.forEach( (val) => {
    console.log(val);
} ) */

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: 'javascript',
        languageFile: 'js'
    },
    {
        languageName: 'java',
        languageFile: 'java'
    },
    {
        languageName: 'python',
        languageFile: 'py'
    }
];

myCoding.forEach( (item)=> {
    //console.log(item.languageName);
    console.log(item.languageFile);
} )