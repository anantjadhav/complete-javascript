if (2 === "2") {
    console.log("executed");
} else {
    console.log("check your condition again");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('user logged in');
}
