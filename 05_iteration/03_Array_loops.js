// const arr = [1,5,3,6,9,8,4]
// for(const num of arr){
//     console.log(num);
    
// }

// const greeting = "Hello world!"
// for(const greet of greeting){
    
//     console.log(`each letter of the hello world ${greet}`);
    
// }


// const greeting = "Hello world!"
// for(const greet of greeting){
//     if(greet == " "){
//         continue
//     }
//     console.log(`each letter of the hello world ${greet}`);
    
// }



//////                Maps          //////////////

const obj1 = new Map()
obj1.set("IN","India")
obj1.set("USA","UNITED STATE OF AMERICA")
obj1.set("fr","france")

// obj1.set("IN","India")  //dublicate value is not allowed
// console.log(obj1);

// for loop on the map
// for (const [key,value] of obj1){
//     console.log(key + ":-" + value);
        
// }

const myObject = {
    game1 : "kho kho",
    game2 : "cricket"
}
for(const key  in myObject){
    // console.log(`keys are this ${key} and value are ${myObject[key]}`);
    
}


const programming = ["java","python","cpp","js","ruby"]
for(const key in programming){
    // console.log(key); //it will print only index number of the array 
    console.log(programming[key]); //it will print the value
    
    
}



////////             Important            ///////////////

// // for object we should use for in loop //////////
// for (const key in object) {

// }


// for array we should use for of loop ////////
// for (const element of object) {
    
// }

