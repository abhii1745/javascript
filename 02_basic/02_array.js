const cricket_hero = ["rohit","dhavan","kohli","dhoni"]
const hero = ["salman","srk","tiger","abhishek"]
const super_hero = ["marvel","spuderman"]

// cricket_hero.push(hero)
// console.log(cricket_hero);
// console.log(cricket_hero[4][1]);

const all_heros = cricket_hero.concat(hero)
console.log(all_heros)

const all_new_heros = [...cricket_hero , ...hero, ...super_hero] //spread operator(it merge the multiple arrays)
// console.log(all_new_heros);

const new_array = [1,2,3,4,[5,6,8,2],6,4,8,6,[2,3,5,[4,6,9,5,[5,34,8]]]]
const make_good_array = new_array.flat(Infinity)
console.log(make_good_array);


console.log(Array.isArray("ABhishek"))
console.log(Array.from("Abhishek"))   //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3,...super_hero,...cricket_hero))  //use of() when there is multiple variable which we have to contact