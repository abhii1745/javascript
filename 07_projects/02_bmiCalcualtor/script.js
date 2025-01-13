
const button = document.querySelector("button")


const form = document.querySelector("form")
form.addEventListener("submit", function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if(height ==='' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`

  } else if(weight ==='' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`

  } else{
    const bmi = (weight/((height * height)/10000)).toFixed(2)
    if (bmi < 18.6){
      result.innerHTML = `<span>You are under weight and your bmi is:${bmi}</span>`
    } else if (bmi > 18.5 && bmi < 25){
      result.innerHTML = `<span>Normal range and your bmi is:${bmi}</span>`
    } else {
      result.innerHTML = `<span>Over Weight weight and your bmi is:${bmi}</span>`
    }
    // result.innerHTML = `<span>${bmi}</span>`
  }




})

