// Element Selectors = Methods that used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()             // Element or Null
// 2. document.getElementsClassName()       // HTML Collection
// 3. document.getElementsTagName()         // HTMTL Colection
// 4. document.querySelector()              // Element or Null
// 5. document.querySelectorAll()           // Nodelist


// 1. document.getElementById() 
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

// 2. document.getElementsClassName()   
const fruits = document.getElementsByClassName("fruits");

for (let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})

// 3. document.getElementsTagName() 
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "blue";
h4Elements[1].style.backgroundColor = "green";

for (let h4Element of h4Elements){
    h4Element.style.backgroundColor = "orange";
}

for (let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "red";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "blue";
});

console.log(h4Elements)

// 4. document.querySelector()
const element = document.querySelector("ul");
element.style.backgroundColor = "green";

console.log(element);

// 5. document.querySelectorAll() 
const foods = document.querySelectorAll("li");

foods[0].style.backgroundColor = "purple";

foods.forEach(food => {
    food.style.backgroundColor = "orange";
});

console.log(foods);