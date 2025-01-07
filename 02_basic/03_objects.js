// singleton
const mySym = Symbol("key1")

const jsUser = {
    name : "ABhishek",
    age : 20,
    email : "abhishek@gmail.com",
    location : "kalyan",
    isLoggedIn : false,
    "full name" :"abhishek yadav",
    [mySym] : "mykey1"
}
// console.log(jsUser.location);
// console.log(jsUser.isLoggedIn);
// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "rahul123@gmail.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
// jsUser.email = "khushbu@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js users");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello js users, welcome to ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
