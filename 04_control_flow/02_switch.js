// // switch operator

// switch (number) {
//     case 10:
//         console.log("number is 10");
        
//         break;
//     case 20:
//         console.log("number is 20");
        
//         break;
//     case 50:
//         console.log("number is 50");
        
//         break;

//     default:
//         console.log("number not matched");
        
//         break;
// }


const month = 12
switch (month) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("april");
        
        break;
 

    default:
        console.log("month not found");
        
        break;
}

/////////     Nullish coalescing Operator(??): null undefined

let val1;
val1 = 66 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
console.log(val1);


////////////////                   Terniary Operator                 //////////////////
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("yes") : console.log("No");

