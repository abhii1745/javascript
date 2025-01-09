// const user = {
//     name : "Abhishek",
//     age : 20,
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.name} welcome to website`);
//         console.log(this);
//     }

// }
// user.welcomeMessage()
// // console.log(this);

// const one = function(){
//     let user = "ABhishek"
//     console.log(this.user);
    
// }
// one()

const tea = () => {
    let user = "ABhishek"
    console.log(this.user);
}

// tea()


// const AddTwo = (num1,num2) => {
// return num1 + num2
// }
// console.log(AddTwo(5,7));

/////////// implicit return /////////
// const AddTwo = (num1,num2) =>  num1 + num2
// console.log(AddTwo(5,7));

// const AddTwo = (num1,num2) =>  (num1 + num2)
// console.log(AddTwo(5,7));

// const AddTwo = (num1,num2) => ({username:"Abhishek"})
// console.log(AddTwo(5,7));

//syntax of arrow function
// const varaible_name = () => ({})



