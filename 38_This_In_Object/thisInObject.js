// this = reference to the object where THIS is used
//         (the object depends on the immediate context)
//          person.name = this.name

const person1 = {
    name: "mascin",
    favFood: "mie ayam",

    sayHello: function(){console.log(`Hello ${this.name}`)},
    eat: function(){console.log(`${this.name} eating the favorit food ${this.favFood}`)},
}

const person2 = {
    name: "acin",
    favFood: "sayur kangkung",

    sayHello: function(){console.log(`Hello ${person2.name}`)},
    eat: function(){console.log(`${person2.name} eating the favorit food ${person2.favFood}`)},
}

/*
    error when use arrow function
    const person3 = {
        name: "acin",
        favFood: "sayur kangkung",

        sayHello: () => {console.log(`Hello ${person2.name}`)},
        eat: () => {console.log(`${person2.name} eating the favorit food ${person2.favFood}`)},
    }
*/

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();