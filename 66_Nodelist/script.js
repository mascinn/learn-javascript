// Nodelist = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            Nodelist won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// Add HTML/CSS properties
buttons.forEach(button => {
    button.style.backgroundColor = "hsl(199, 100%, 50%)";
    button.textContent += "😃";
});

// Click event listener
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "tomato";
    })
});

// Mouseover and mouseout event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(199, 100%, 40%)";
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(199, 100%, 50%)";
    })
});

// Add an element
const newButton = document.createElement("button"); // Step 1
newButton.textContent = "Button 5 😃";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// Remove an element
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});