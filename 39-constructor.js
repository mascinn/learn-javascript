// constructor = special method for defining the
//                  prpoerties and method objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model, 
    this.year = year,
    this.color = color,

    this.drive = function(){
        console.log(`You drive in the ${this.model} model`)
    }
}

const car1 = new Car("mascin", "brio", 2010, "red");
const car2 = new Car("asin", "fortuner", 2018, "blue");

console.log(car1.make);
car1.drive();
console.log(car2.make);
car2.drive();