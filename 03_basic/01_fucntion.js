// function myName(){
//     console.log("A");
//     console.log("B");
//     console.log("H");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("E");
//     console.log("K");
    
// }
// // myName()
// function addTwoNumbers(number1,number2){  //(number1,number2) =>  these are parameters
//     const addition  = number1 + number2
//     return addition
//     console.log(addition);
    
// }
// // addTwoNumbers(2,4) //pass values are arguments
// const result = addTwoNumbers(2,3)
// console.log("Result", result);


// function LogInUserMessage(username){
//     if(username === undefined){
//         console.log("please enter valid username");
//         return
//     }
//     return `${username} just  logged in`

// }
// console.log(LogInUserMessage())


// function calculateCartPrice(...num1){   // ...it is REST OPERATOR
//     return num1
// }
// console.log(calculateCartPrice(20,50 ,60 ,90 ))

// function calculateCartPrice(val1,val2,...num1){   // ...it is REST OPERATOR,val1 and val2 take first two arguements
//     return num1
// }
// console.log(calculateCartPrice(20,50 ,60 ,90 ))

const user1 = {
    id : 120,
    name :"abhishek",
    price : 999
}
const user2 = {
    id : 130,
    name :"rahul",
    price : 1999
}
function handleObject(anyobject){
    console.log(`my user is ${anyobject.name} and price for that user is ${anyobject.price}`);
    
}
// handleObject(user1)
// handleObject(user2)
handleObject({
    name : "abhijeet",
    price : 20
})

const myNewArray = [20,30,50,60,90,40]
function returnSecondValue(getArray){
    console.log("second element of the array is", getArray[1]);
    
}
// returnSecondValue(myNewArray)
returnSecondValue([50,60,90,40])