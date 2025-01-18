const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(i = 0; i < 6; i ++){
        color += hex[Math.floor(Math.random() * 16)]


    }
    return color;
}


let interVal;
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const body = document.querySelector("body")
start.addEventListener("click", function(e){
    interVal = setInterval(function(){
        body.style.backgroundColor = randomColor()
        console.log("abhishek");
        


    },1000)
})

stop.addEventListener("click", function(e){
    clearInterval(interVal)
})

// console.log(randomColor());

// console.log(Math.floor(Math.random() * 16));
