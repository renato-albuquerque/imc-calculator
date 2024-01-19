// functions

function cleanValues() {
    let inputHeight = document.querySelector(".inputHeight");
    let inputWeight = document.querySelector(".inputWeight");

    inputHeight.value = "";
    inputWeight.value = "";
}

function resultPage() {   
    let inputHeight = document.querySelector(".inputHeight");
    let inputWeight = document.querySelector(".inputWeight");
    let containerOne = document.querySelector(".container-1");
    let containerTwo = document.querySelector(".container-2");
    let showBmi = document.querySelector(".titleSecondPage span");
    let showSituation = document.querySelector(".subtitleSecondPage span");
    
    if((inputHeight.value == "") || (inputHeight.value == 0) || (inputWeight.value == "") || (inputWeight.value == 0)) {
        alert("Please, both fields must be filled in. The values can't be empty or zero.");
    } else {
        containerOne.classList.add("hide");
        containerTwo.classList.remove("hide");
    }

    showBmi.textContent = bmiResult();
    showSituation.textContent = bmiSituation();
}

// BMI calculation
function bmiResult() {
    let inputHeight = document.querySelector(".inputHeight");
    let inputWeight = document.querySelector(".inputWeight");
    let height = inputHeight.value;
    let weight = inputWeight.value;

    return ((weight) / (height * height)).toFixed(1);    
}

function bmiSituation() {
    if(bmiResult() < 18.5) {
        return "Thinness"
    } else if(bmiResult() < 25.0 ) {
        return "Normal"
    } else if(bmiResult() < 30.0) {
        return "Overweight"
    } else if(bmiResult() < 40.0) {
        return "Obesity"
    } else {
        return "Severe obesity"
    }
}

function returnPage() {
    let containerOne = document.querySelector(".container-1");
    let containerTwo = document.querySelector(".container-2");
    let inputHeight = document.querySelector(".inputHeight");
    let inputWeight = document.querySelector(".inputWeight");

    containerTwo.classList.add("hide");
    containerOne.classList.remove("hide");
    inputHeight.value = "";
    inputWeight.value = "";
}
