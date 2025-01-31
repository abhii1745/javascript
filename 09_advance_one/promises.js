// const promiseOne = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Async Await is completed");
//         resolve()
        
//     },1000)


// })
// promiseOne.then(function(){
//     console.log("promise consumes");
    
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
        
//     },1000)
// }).then(function(){
//     console.log("promise 2 consumed");
    

// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // console.log("asyn task 3");
//         resolve({username : "Abhishek", email:"abhi123@gmail.com"})
        
//     },1000)
    
// })
// promiseThree.then(function(abc){
//     console.log(abc);
    

// })




// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function()
//     {
//         let error = false
//         if(! error){
//             resolve({username :"Abhishek Yadav", pass : "145"})

//         }else{
            
//             reject("your request is rejected")
//         }

//     },1000)
// })
// promiseFour.then(function(abc){
//     console.log(abc);
//     // console.log(abc.username);
//     return abc.username
    

// }).then(function(abc){
//     console.log(abc);
    

// })
// .catch(function(abc){
//     console.log(abc);
// })






// //optional using try catch
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({message:"this is js code", pass: "1223"})

//         }else{
//             reject("your req is rejected")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
        
//     const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
        
        
//     }
    
// }
// consumePromiseFive()