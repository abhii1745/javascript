// const myNums = [1,2,6]
// // const newNums = myNums.reduce( function(acc,currVal){
// //     return acc + currVal
// // } ,0)

// const newNums = myNums.reduce( (acc,currVal)=> (acc + currVal ),3)
// console.log(newNums);

const shoppingCart = [
    {
        courseName:"java",
        price : 2999
    },
    {
        courseName:"python",
        price : 1999
    },
    {
        courseName:"go",
        price : 4999
    },
    {
        courseName:"HTML",
        price : 999
    }
]
a = shoppingCart.reduce( (acc,item) => acc+item.price,0 )
console.log(a);
