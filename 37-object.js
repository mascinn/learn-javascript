// object = a collection of related propeties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {
//              key:value,
//              function()
//          }

const person1 = {
    firstName: "Makhasin",
    lastName: "Muhammad",
    age: 21,
    isEmployed: true,

    sayHello: function(){console.log("Hello spongebob")},
    eat: function(){console.log("Makhasin is eating fried chicken")},
}

const person2 = {
    firstName: "mascin",
    lastName: "keren",
    age: 21,
    isEmployed: true,

    sayHello: () =>{console.log("Hello mascin")},
    eat: () => {console.log("mascin eating egg")},
}

person1.eat();
person2.eat();