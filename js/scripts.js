// variables




// events



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
    
    if((inputHeight.value == "") || (inputHeight.value == 0) || (inputWeight.value == "") || (inputWeight.value == 0)) {
        alert("Please enter with a correct value. The values cannot be empty or zero.")
    } else {
        containerOne.classList.add("hide");
        containerTwo.classList.remove("hide");
    }
    
    // calcular imc
    // mostrar imc, text content
}

function returnPage() {
    let containerOne = document.querySelector(".container-1");
    let containerTwo = document.querySelector(".container-2");
    containerTwo.classList.add("hide");
    containerOne.classList.remove("hide");
}

/* function result() {
    const height = inputHeight.value;
    const weight = inputWeight.value;
    
    return ((weight) * (height * height)).toFixed(2);    
} */