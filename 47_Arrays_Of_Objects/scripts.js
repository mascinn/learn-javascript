// Array of Object
// Creating an array that contains multiple objects with fruit information
const fruits = [
    {name: "apple", color: "red", calories: 100},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineaple", color: "yellow", calories: 37},
    {name: "strawberry", color: "red", calories: 34}
];


// Access object properties
// Accessing the name property from an object inside the array using index
console.log("Access the name property from array index [0]");
console.log(fruits[0].name);

console.log(`\n\n`);


// Add object
// Adding a new object into the array using push() method
console.log("Adding a new object into array of objects with .push() method");
fruits.push({name: "grapes", color: "purple", calories: 37});

console.log(fruits);

console.log(`\n\n`);


// Remove last object
// Removing the last object from the array using pop() method
console.log("Removing the last object with .pop() method");
fruits.pop();

console.log(fruits);

console.log(`\n\n`);


// Remove multiple objects
// Removing multiple objects starting from index 1 and deleting 2 objects using splice()
console.log("Removing multiple objects ([1]-[2]) with .splice() method");
fruits.splice(1,2);

console.log(fruits);

console.log(`\n\n`);


// forEach()
// Accessing every object inside the array and executing a function for each object
console.log("Accessing object properties with forEach()");

fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));

console.log(`\n\n`);


// map()
// Creating a new array by extracting specific properties from objects
console.log("Accessing every property with .map() method");
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

console.log(`\n\n`);


// filter()
// Creating a new array containing objects that match a specific condition
console.log("Filtering object properties with .filter() method");
const redFruits = fruits.filter(fruit => fruit.color === "red");
const lowCaloriesFruits = fruits.filter(
    fruit => fruit.calories < 50
);
const highCaloriesFruits = fruits.filter(
    fruit => fruit.calories >= 100
);

console.log(redFruits);
console.log(lowCaloriesFruits);
console.log(highCaloriesFruits);

console.log(`\n\n`);


// reduce()
// Finding the object with maximum and minimum calories by reducing the array
console.log("Finding maximum and minimum calories fruits with .reduce() method");
const maxCaloriesFruit = fruits.reduce((max, fruit) => 
    fruit.calories > max.calories
    ? fruit
    : max
);
const minCaloriesFruit = fruits.reduce((min, fruit) => 
    fruit.calories < min.calories
    ? fruit
    : min
);

console.log(maxCaloriesFruit);
console.log(minCaloriesFruit);