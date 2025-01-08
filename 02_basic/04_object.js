// const tinderUser = new Object()  // singleton object
const tinderUser = {}  //non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Abhishek"
tinderUser.location = "kalyan" 

// console.log(tinderUser)

// const regularUser = {
//     email : "abhishek123@gmail.com",
//     full_name : {
//         first_name : "abhishek",
//         secnd_name : "rahul",
//         last_name : {
//             surname : "yadav",
//             second_surname : "yadav2",
//             gotra : {
//                 gwala : "cow_people",
//                 previous_user : [tinderUser],
//             }
//         }
//     }
// }
// console.log(regularUser.full_name.last_name.surname);

// const obj1 = {1:"Abhishek",2:"Rahul"}
// const obj2 = {3:"A",4: "B"}
// const obj3 = {5:"Rohit",6:"kohli"}

// // console.log(obj1 + obj2 + obj3);

// const obj4 = {...obj1,...obj2,...obj3}
// // const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); //it convert all keys into the array list
// console.log(Object.values(tinderUser)); // values
// console.log(Object.entries(tinderUser));


const course = {
    name : "js  tutorials",
    techaer : "abhishek",
    price : 999,
    duration : "8 hour"
}
// console.log(course["duration"]);
// console.log(course.duration);


// **********************Object destructure********************


// const {duration : du} = course
// console.log(du);

const {techaer : tr} = course
console.log(tr);


