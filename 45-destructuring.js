// destructuring = extract value from array and objects,
//                 then assgin them to variable in a conveniant way
//                 [] = to perform array destruturing
//                 {} = to perform objects destructuring

// Example 1
// Swap the value of variable
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

console.log(`\n`);

// Example 2
// Swap 2 elemnents in array
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]]

console.log(colors);

console.log(`\n`);

// Example 3
// Assign array elements to variable
const fruits = ["banana", "apple", "mango", "avocado"];
const [firstFruit, secondFruit, ...extraFruits] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(extraFruits);

console.log(`\n`);


// Example 4
// Extract value from objects
const person1 = {
    firstName: "Makhasin",
    lastName: "Muhammad",
    age: 21,
    job: "Software Developer",
}

const person2 = {
    firstName: "mascin",
    lastName: "acin",
    age: 23,
}

const {firstName, lastName, age, job="Unemployed"} = person1; // if job not define, value will be "Unemployed"
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


console.log(`\n`);

// Example 5
// Destructure in function parameters
const person3 = {
    firstName: "Makhasin",
    lastName: "Muhammad",
    age: 21,
    job: "Software Developer",
}

const person4 = {
    firstName: "mascin",
    lastName: "acin",
    age: 23,
}

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person4);