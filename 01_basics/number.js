// sum of the positive numbers
/* function sumPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number){
        if(number >= 0) {
            sum = sum + number;
        }
    })
    return sum;
}


// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5 */


// dynamic curring function

function add(a) {
    return function(b) {
        if(!b) {
            return a;
        }
        return add(a+b);
    }
}

console.log(add(10)(20)(30)());


// sum of odd numbers
function sumOddNumbers(numbers1) {
    let sum = 0;
    numbers1.forEach(function(numbers2){
        if(numbers2 % 2 !== 0) {
            sum = sum + numbers2;
        }
    })
    return sum;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

