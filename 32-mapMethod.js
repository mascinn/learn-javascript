// map() = creates a new array with the results of calling a function for every array element

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(square);
let cubedNumbers = numbers.map(cube);

function square(elements){
    return Math.pow(elements, 2);
}

function cube(elements){
    return Math.pow(elements, 3);
}


console.log("Original numbers: " + numbers);
console.log("Squared numbers: " + squaredNumbers);
console.log("Cubed numbers: " + cubedNumbers);


let dates = ["2023-01-01", "2023-02-14", "2023-03-17", "2023-04-01", "2023-05-05"];
let formattedDates = dates.map(formatDate);

function formatDate(dateString){
    let date = dateString.split("-");
    return `${date[1]}/${date[2]}/${date[0]}`;
}

console.log("Original dates: " + dates);
console.log("Formatted dates: " + formattedDates);