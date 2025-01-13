const time = document.querySelector("#clock")

// syntax ,
// setInterval(function(){},1000)   //it run in every second  ,1000 is eqaul to 1 second

setInterval(function(){
  let timeDate = new Date()
  time.innerHTML = timeDate.toLocaleTimeString()

},1000)