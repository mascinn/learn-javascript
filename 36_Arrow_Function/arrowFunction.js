// arrow function => a concise way to write function
//                   expressions good for simple that you use only once
//                   (paramaters) => some code

const hello = (name, age) => {
    console.log(`Hello ${name}`)
    console.log(`You are ${age} old`)
};

hello("mascin", 21);


setTimeout(() => console.log("Hello"), 2000)


let number = [1,2,3,4,5,6];
let squareNums = number.map((elements) => Math.pow(elements, 2));
let cubeNums = number.map((elements) => Math.pow(elements, 3));
let evenNums = number.filter((elements) => elements % 2 === 0);
let oddNums = number.filter((elements) => elements % 2 !== 0);
let totalNums = number.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(squareNums);
console.log(cubeNums);
console.log(evenNums);
console.log(oddNums);
console.log(totalNums);