// getter = special methode that can make property readable
// setter = special methode that can make property writeable
// validate and modifiy a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        } else{
            console.error("Width must be a possitive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        } else{
            console.error("Height must be a possitive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)} cm`;
    }

    get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height.toFixed(1))} cm^2`;
    }
}

const rectangle = new Rectangle(10, 4);

rectangle.width = 12;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
console.log(`\n\n`);



class Person{
    
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof(newFirstName) === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        } else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof(newLastName) === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        } else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(newAge >=0){
            this._age = newAge;
        } else{
            console.error("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("mascin", "asin", 50);

person.firstName = "Makhasin";
person.lastName = "Muhammad";
person.age = 21;

console.log(`First Name: ${person.firstName}`);
console.log(`last Name: ${person.lastName}`);
console.log(`Full Name: ${person.fullName}`);
console.log(`Age: ${person.age}`);