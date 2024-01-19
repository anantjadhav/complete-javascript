//  for loop

//  print numbers from 1 to 10

for (let index = 0; index <= 10; index++) {
    const element = index;
    /* console.log(element); */
}

// print table 1 to 10

for (let i = 2; i <= 10; i++) {
   /*  console.log(`Outer loop: ${i}`); */
    for (let j = 2; j <= 10; j++) {
        /* console.log(i + '*' + j + ' = ' + i*j ); */
    }
}

// apply for loop in the array

let familyMembers = ['Sitabai', 'Anant', 'Ashwini', 'Aryan', 'Anvi'];

for (let index = 0; index < familyMembers.length; index++) {
    const element = familyMembers[index];
    /* console.log(element); */
}

// break and continue

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log('5 Detected');
        break;
    }
    console.log(`Value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log('5 Detected');
        continue;
    }
    console.log(`Value of i is ${i}`);
}

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
 */
let myarr = [1, 2, 3]

console.log(myarr);