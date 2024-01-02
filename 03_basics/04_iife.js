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

