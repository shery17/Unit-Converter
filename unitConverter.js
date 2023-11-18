const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

convertBtn.addEventListener("click", function() {
    lengthConverter()
    volumeConverter()
    massConverter()
})

function lengthConverter() {
    let feetCalc = (inputEl.value * 3.281).toFixed(3)
    let meterCalc = (inputEl.value * 0.305).toFixed(3)
    let toString = `${inputEl.value} meters = ${feetCalc} feet | ${inputEl.value} feet = ${meterCalc} meters`
    lengthP.textContent = toString 
}

function volumeConverter() {
    let gallonCalc = (inputEl.value * 0.264).toFixed(3)
    let litreCalc = (inputEl.value * 3.788).toFixed(3)
    let toString = `${inputEl.value} litres = ${gallonCalc} gallons | ${inputEl.value} gallons = ${litreCalc} litres`
    volumeP.textContent = toString
}

function massConverter() {
    let poundCalc = (inputEl.value * 2.204).toFixed(3)
    let kilogramCalc = (inputEl.value * 0.454).toFixed(3)
    let toString = `${inputEl.value} kilos = ${poundCalc} pounds | ${inputEl.value} pounds = ${kilogramCalc} kilos`
    massP.textContent = toString
}