// super = keyword is uses in classes to call the constructor or
//         or acces the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animals{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`${this.name} moves at a speed of ${speed} mph`)
    }
}

class Rabbit extends Animals{

    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`${this.name} is running`)
        super.move(this.runSpeed);
    }
}

class Fish extends Animals{

    constructor(name, age, swimSpeed){
        super(name, age)
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`${this.name} is swimming`)
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animals{

    constructor(name, age, flySpeed){
        super(name, age)
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`${this.name} is flying`)
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 10, 50);
const fish = new Fish("fish", 5, 8);
const hawk = new Hawk("hawk", 15, 70);

rabbit.run();
fish.swim();
hawk.fly();