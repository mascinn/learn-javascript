// .filter() = creates a new array with all elements that pass the test implemented by the provided function.

let word = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];
let longWords = word.filter(isLongWord);
let shortWords = word.filter(isShortWord);

function isLongWord(elements){
    return elements.length > 5;
}

function isShortWord(elements){
    return elements.length <= 5;
}

console.log("Original words: " + word);
console.log("Long words: " + longWords);
console.log("Short words: " + shortWords);