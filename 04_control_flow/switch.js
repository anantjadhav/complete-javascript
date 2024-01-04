// SWITCH CASE

let month = 4;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("not found");
        break;
}


// truthy and falsy values

const userEmail = "anant.jadhav6@gmail.com";

if (userEmail) {
    console.log('Got the user email');
} else {
    console.log('user email not found');
}

// false values

/* false
0
-0
BigInt 0n
""
[]
null
undefined
NaN */

/* truthy values */
/* "0"
"false"
" "
[]
{}
function(){} */

// exceptions

console.log(false == 0);
console.log(false == '');
console.log(0 == '');

// Logical operators 
/* && (and) means all the conditions should be true
|| (or) means one condition should be true to executive the code */

// Nullish Coalescing Operator (??): null undefined

