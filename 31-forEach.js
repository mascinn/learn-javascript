let number = [1,2,3,4,5];

function displayConsole(elements){
    console.log(elements);
}

function double(elements, index, array){
    array[index] = elements * 2;
}

function square(elements, index, array){
    array[index] = Math.pow(elements, 2);
}

number.forEach(square);
number.forEach(double);
number.forEach(displayConsole);


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

function display(element){
    console.log(element);
}

function toUpperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
// fruits.forEach(toUpperCase);
fruits.forEach(display);
