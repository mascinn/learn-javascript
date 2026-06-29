/* sort() = methode used to sort elements of an arrray in place.
            sort elements as an string in lexicographic order, not alphabetical
            lexicographic = (alphabet + numbers + symbols)
*/

const numbers = [1,10,11,8,7,6,3];
const fruits = ["banana", "grape", "avocado", "pineaple"];

numbers.sort();
fruits.sort();

console.log(numbers);
console.log(fruits);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

// another example
const people = [{name: "Spongebob", age: 20, gpa: 3.0},
                {name: "Squidward", age: 24, gpa: 3.5},
                {name: "Pattrick", age: 23, gpa: 2.8},
                {name: "Sandy", age: 25, gpa: 3.7}
            ]

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => b.gpa - a.gpa);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);