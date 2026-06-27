// function declaration = define a reusable block of code
// function expression = define a reusable block of code and assign it to a variable

function hello(){
    console.log('Hello!');
}

setTimeout(hello, 1000);

setTimeout(function sayName(){
    console.log("My name is mascin")
}, 3000);


// function on variable
const number = [1, 2, 3, 4, 5];

const square = number.map(function (elements){
    return Math.pow(elements, 2)
});

const cubes = number.map(function (elements){
    return Math.pow(elements, 3)
});

const evenNums = number.filter(function (elements){
    return elements % 2 === 0;
});

const oddNums = number.filter(function (elements){
    return elements % 2 !== 0;
});

const total = number.reduce(function (accumulator, currentValues){
    return accumulator + currentValues;
})


console.log(square);
console.log(total);