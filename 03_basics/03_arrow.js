const user = {
    username: "anant",
    price: 999,

    welcomeMessage: function() {
        /* console.log(`${this.username} , welcome to the website`);
        console.log(this); */
    }
}

user.welcomeMessage()

user.username = 'jadhav'

user.welcomeMessage()
// this refer to current context

/* console.log(this); */

/* function chai() {
    let username = 'Anant';
    console.log(this.username);
}

chai() */