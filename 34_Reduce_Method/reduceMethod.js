// .reduce() = method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce(sum);

function sum(accumulator, currentValue){
    return accumulator + currentValue;
}

console.log("Original numbers: " + numbers);
console.log("Total: " + total + "\n" + "\n");


let grades = [85, 90, 78, 92, 88];
let minGrade = grades. reduce(findMin);
let maxGrade = grades.reduce(findMax);
let average = grades.reduce(calculateAverage);

function findMin(accumulator, currentValue){
    return Math.min(accumulator, currentValue);
}

function findMax(accumulator, currentValue){
    return Math.max(accumulator, currentValue);
}

function calculateAverage(accumulator, currentValue, index, array){
    accumulator += currentValue;
    if(index === array.length - 1){
        return accumulator / array.length;
    }
    return accumulator;
}

console.log("Original grades: " + grades);
console.log("Minimum grade: " + minGrade);
console.log("Maximum grade: " + maxGrade);
console.log("Average: " + average);