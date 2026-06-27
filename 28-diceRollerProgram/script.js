const inputDice = document.querySelector("#numOfDice");
const rollButton = document.querySelector("#rollDice");
const resultText = document.querySelector("#diceResult");
const imageContainer = document.querySelector("#diceImages");

rollButton.addEventListener(
    "click",
    rollDice
);

function rollDice(){
    const numberOfDice = Number(inputDice.value);
    const diceValues = generateDice(numberOfDice);

    showResult(diceValues);
    showImages(diceValues);
}

function generateDice(amount){
    const values = [];

    for(let i = 0; i < amount; i++){
        const randomNumber = Math.floor(
            Math.random() * 6
        ) + 1;

        values.push(randomNumber);
    }
    return values;
}

function showResult(values){
    resultText.textContent =
        `You rolled: ${values.join(", ")}`;
}

function showImages(values){
    imageContainer.innerHTML = "";

    values.forEach(value => {
        const image = document.createElement("img");
        image.src = `dice/${value}.png`;
        image.alt = `Dice ${value}`;
        imageContainer.appendChild(image);
    });
}