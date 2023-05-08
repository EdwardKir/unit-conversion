/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputField = document.getElementById('input-field')
let convertBtn = document.getElementById('convert-btn')

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener('click', function() {
    let baseValue = inputField.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet 
                            / ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(2)} meter` 
                            
    volumeEl.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(2)} gallon 
                            / ${baseValue} gallon = ${(baseValue / literToGallon).toFixed(2)} liter` 
                            
    massEl.textContent = `${baseValue} kilogram = ${(baseValue * kiloToPound).toFixed(2)} pound 
                            / ${baseValue} pound = ${(baseValue / kiloToPound).toFixed(2)} kilogram` 
})
