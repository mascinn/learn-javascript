// DOM Navigation = The process of navigating through the structure 
//                  of an HTML document using Javascript

// 1. firstElementChild
// 2. lastElementChild
// 3. nextElementSibling
// 4. previousElementSibling
// 5. parentElement
// 6. children

// 1. firstElementChild
const firstUlElement = document.getElementById("fruits");
const firstElementChild = firstUlElement.firstElementChild;
firstElementChild.style.backgroundColor = "yellow";

const firstUlElements = document.querySelectorAll("ul");

firstUlElements.forEach(firstUlElement => {
    const firstChild = firstUlElement.firstElementChild;
    firstChild.style.backgroundColor = "green";
});



// 2. lastElementChild
const lastUlElement = document.getElementById("fruits");
const lastElementChild = lastUlElement.lastElementChild;
lastElementChild.style.backgroundColor = "yellow";

const lastUlElements = document.querySelectorAll("ul");

lastUlElements.forEach(lastUlElement => {
    const lastChild = lastUlElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});



// 3. nextElementSibling
const appleElement = document.getElementById("apple");
const nextElementSibling = appleElement.nextElementSibling;
nextElementSibling.style.backgroundColor = "orange";



// 4. previousElementSibling
const orangeElement = document.getElementById("orange");
const prevElementSibling = orangeElement.previousElementSibling;
prevElementSibling.style.backgroundColor = "red";



// 5. parentElement
const childElement = document.getElementById("carrots");
const parent = childElement.parentElement;
parent.style.backgroundColor = "purple";



// 6. children
const parentElement = document.getElementById("desserts");
const children = parentElement.children;

children[1].style.backgroundColor = "pink";

Array.from(children).forEach(child => {
    child.style.backgroundColor = "gray";
});

console.log(children);