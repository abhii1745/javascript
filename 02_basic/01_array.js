//array
const array = [0,5,8,6,9,6]
const superHero = ["rohot","kohli","dhavan","dhoni"]
// console.log(array[3]);
// console.log(superHero[2]);
// // console.log(superHero.length);
// // superHero.push("chahal")
// console.log(superHero);
// superHero.push(array)

// console.log(superHero);
// array.pop()
// superHero.unshift(5)
// superHero.shift()

// const newArray = superHero.join()
// console.log(superHero);
// console.log(newArray);


//************slice,splice*************
// console.log("A", superHero);

// const myn1 = superHero.slice(1,4)
// console.log("B", myn1);

console.log("original array", array);

const na1 = array.slice(1,3)
console.log("slice array", na1);

const na2 = array.splice(1,3)
console.log("original array", array);

console.log("Splice Array", na2)