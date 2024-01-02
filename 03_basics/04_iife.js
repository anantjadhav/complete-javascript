// immediately invoked function expression
// named iife
(function chai() {
    console.log('DB Connected');
})();

// arrow function with IIFE
// without named iife
( (name) => {
    console.log(`DB Connected two ${name}`);
} )('anant');

// javascript execution context

// 1. global execution context - this
// 2. memory phase - alocate memory variables
//  execution phase (new veriable context)

// functions under the functios 

// LIFO - last in first out
