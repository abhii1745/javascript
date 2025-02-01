// ///////////////////////Object Literals //////////////////
// const Abhishek = {
//     username : "abhi",
//     passowrd : "123",
//     getUserDetials : function(){
//         console.log(this.username);
//         console.log(this);
        

//     }
// }
// // console.log(Abhishek);
// Abhishek.getUserDetials()




////////////////////////        Constrcutor ////////////////////

const ABC = function(username,isLoggedIn,age){
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.age = age
    return this
    // console.log(`${username} ${age} ${isLoggedIn}`);
    
}
const userOne = new ABC("abhishek",true,15)
const userTwo =  new ABC("Rahul",true,15)
console.log(userOne.age);
console.log(userTwo);




