// filter method

const mynums = [1,2,3,4,5,6,7,8,9,10];

/* const newnums = mynums.filter( (nums) => nums > 4)

console.log(newnums); */

// for each example

const mynewnums = [];

mynums.forEach( (num) => {
    if (num > 4) {
        mynewnums.push(num);
    }
} )

/* console.log(mynewnums); */


// map

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

/* const myNewNumbers = myNumbers.map( (nam) => nam + 10); */

/* const myNewNumbers = myNumbers.map( (nam) => {
    return nam + 10;
});
 */
/* console.log(myNewNumbers); */

// chaining

const myNums = myNumbers
    .map( (num) => num * 10 )
    .map( (num) => num + 1 )
    .filter( (num) => num >= 40 )
/* console.log(myNums); */


// reduce

const numValue = [1, 2, 3];

const myTotal = numValue.reduce( (acc, currVal) => {
    console.log(`Value of acc: ${acc} and currVal is ${currVal}`);
    return acc + currVal;
}, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'Javascript',
        price: 999
    },
    {
        itemName: 'python',
        price: 1999
    },
    {
        itemName: 'data science',
        price: 2999
    },
]

const shoppingTotal = shoppingCart.reduce( (acc, item) =>  acc + item.price, 0  )

console.log(shoppingTotal);