const myNums = [1,2,3]
const newNums = myNums.reduce( function(acc,currVal){
    return acc + currVal
} ,0)
console.log(newNums);

