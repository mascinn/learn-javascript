// Claslist = Element property in Javascript used to interact
//            with an element's list of classes (CSS Classes)
//            Allows you to make reusable classes for many elements
//            across your webpage.


// 1. add()
// 2. remove()
// 3. toggle(Remove if present, Add if not)
// 4. replace(oldClass, newClass)
// 5. contains()


const button1 = document.getElementById("button1");

// add()
button1.classList.add("enabled");

button1.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

// remove()
button1.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});

// toggle()
const button2 = document.getElementById("button2");

button2.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

button2.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});

// replace()
button1.addEventListener("click", event => {
    event.target.classList.replace("enabled", "disabled");
});


// contains()
const button3 = document.getElementById("button3");

button3.classList.add("enabled");

button3.addEventListener("click", event => {
    if(event.target.classList.contains("enabled")){
        event.target.textContent = "Button disabled";
        event.target.classList.replace("enabled", "disabled");
    } else{
        event.target.textContent = "Button enabled";
        event.target.classList.replace("disabled", "enabled");
    }
});


const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");

myH1.addEventListener("click", event => {
    if(event.target.classList.contains("enabled")){
        event.target.classList.replace("enabled", "disabled");
    } else{
        event.target.classList.replace("disabled", "enabled");
    }
});



// new button
let buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("enabled")){
            event.target.classList.replace("enabled", "disabled");
        } else{
            event.target.classList.replace("disabled", "enabled");
        }
    });
})
