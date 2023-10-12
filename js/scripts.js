// variables

const container = document.querySelector(".container")
const inputHeight = document.querySelector(".inputHeight");
const inputWeight = document.querySelector(".inputWeight");
const btnCalculate = document.querySelector(".btnCalculate");
const btnClean = document.querySelector(".btnClean");

// events

btnCalculate.addEventListener("click", resultPage);








// functions

function resultPage() {
    container.classList.add("hide")
}

/* function bmiResult() {
    const height = inputHeight.value;
    const weight = inputWeight.value;
    
    return ((weight) * (height * height)).toFixed(2);    
} */