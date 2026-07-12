// JSON = (Javascript Object Notation) data-interchange format
//         Used for exchanging data between a server and a web application
//         JSON Files {key:values} OR [value1, value2, value3]

//         JSON.stringify() = converts a JS objects to a JSON string.
//         JSON.parse() = converts a JSON string to a JS object


//JSON.stringify() = converts a JS objects to a JSON string.
const names = ["Spongebob", "Pattrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": "true",
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};

const people = [
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Pattrick",
        "age": 29,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 31,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 34,
        "isEmployed": true
    }
];

const jsonstring = JSON.stringify(people    );
console.log(people);


// JSON.parse() = converts a JSON string to a JS object
const jsonNames = `["Spongebob", "Pattrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30,"isEmployed": "true", "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
                {"name": "Pattrick", "age": 29, "isEmployed": false},
                {"name": "Squidward", "age": 31, "isEmployed": true},
                {"name": "Sandy", "age": 34, "isEmployed": true}]`;

const parsedData = JSON.parse(jsonPeople);
console.log(parsedData);


// fetch
fetch("names.json")
     .then(response => response.json())
     .then(value => console.log(value));

fetch("person.json")
     .then(response => response.json())
     .then(value => console.log(value));

     
fetch("people.json")
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value.name)));
fetch("people.json")
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value.age)));
fetch("people.json")
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value.isEmployed)));