// variables

let inputHeight = document.querySelector(".inputHeight");
let inputWeight = document.querySelector(".inputWeight");


// events



// functions

function cleanValues() {
    
}

function resultPage() {   
    let containerOne = document.querySelector(".container-1");
    let containerTwo = document.querySelector(".container-2");
    containerOne.classList.add("hide");
    containerTwo.classList.remove("hide");
    
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