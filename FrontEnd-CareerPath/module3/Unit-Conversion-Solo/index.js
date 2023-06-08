/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

    let inputValue = document.querySelector("input");

    document.querySelector("button").addEventListener("click", function (){
    calculateLength(inputValue.value);
    calculateVolume(inputValue.value);
    calculateMass(inputValue.value);
})

function calculateLength(inputValue){
    let meter = parseFloat(inputValue);
    let feet = (meter* 3.281).toFixed(3);
    let newMeter = (meter/ 3.281).toFixed(3);
    let lengthHtml = `${meter} meters = ${feet} feet | ${meter} feet = ${newMeter} meters`
    document.querySelector(".length").innerHTML = `<p> ${lengthHtml} </p>`
}

function calculateVolume(inputValue){
    let liter = parseFloat(inputValue);
    let gallon = (liter* 0.264).toFixed(3);;
    let newLiter = (liter/ 0.264).toFixed(3);
    let volumeHtml = `${liter} meters = ${gallon} feet | ${gallon} feet = ${newLiter} meters`
    document.querySelector(".volume").innerHTML = `<p> ${volumeHtml} </p>`
}

function calculateMass(inputValue){
    let kilograms = parseFloat(inputValue);
    let pounds = (kilograms* 2.204).toFixed(3);;
    let newKilograms = (kilograms/ 2.204).toFixed(3);
    let massHtml = `${kilograms} kilograms = ${pounds} pounds | 
                    ${kilograms} pounds = {newKilograms meters`
    document.querySelector(".mass").innerHTML = `<p> ${massHtml} </p>`

}