/* Nested Objects = Objects inside of other objects
                    ALlows you to represent more complex data sturctures
                    Child objects is enclosed by a Parent Objects
                    Person{Address{}, ContactInfo{}}
                    ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/

const person = {
    fullName: "Spongebob Squarepants",
    age: 21,
    isStudent: true,
    hobbies: ["karete", "jelly fishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address);
console.log(person.address.street);

for(const property in person.address){
    console.log(person.address[property]);
}
console.log(`\n\n`);


// Another complicated example

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person(
                    "Spongebob Squarepants",
                    24,
                    "124 Conch St.",
                    "Bikini Bottom",
                    "Int. Waters"
                )

const person2 = new Person(
                    "Pattrick Star",
                    26,
                    "128 Conch St.",
                    "Bikini Bottom",
                    "Int. Waters"
                )


const person3 = new Person(
                    "Squidward Tentacles",
                    35,
                    "124 Conch St.",
                    "Bikini Bottom",
                    "Int. Waters"
                )

console.log(person3.address.city);

const persons = [person1, person2, person3];

for(const property in persons){
    console.log(`\nName: ${persons[property].name}`);
    console.log(`Age: ${persons[property].age}`);
    console.log(`Address: ${persons[property].addres}`);
}