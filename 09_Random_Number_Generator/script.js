// RANDOM NUMBER GENERATOR

const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const result = document.getElementById("result");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", generateNumber);

function generateNumber() {

    let min = Number(minInput.value);
    let max = Number(maxInput.value);

    if (min > max){
        result.textContent = "Error: Minimum value cannot be greater than maximum value.";
        return;
    }

    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    result.innerHTML = random;
}