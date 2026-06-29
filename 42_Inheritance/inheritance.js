// inheritance = allows a new new class to inherit properties and methods
//               form an existing class (parent - child)
//               helps with code reusability

class Animals{
    alive = true;

    isAlive(){
        console.log(`${this.name} is alive`)
    }
    eat(){
        console.log(`${this.name} is eating`)
    }

    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

class Rabbit extends Animals{
    name = "rabbit";

    run(){
        console.log(`${this.name} is running`)
    }
}

class Fish extends Animals{
    name = "fish";

    swim(){
        console.log(`${this.name} is swimming`)
    }
}

class Hawk extends Animals{
    name = "hawk";

    fly(){
        console.log(`${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.isAlive();
rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log(`\n`);

fish.isAlive();
fish.eat();
fish.sleep();
fish.swim();
console.log(`\n`);

hawk.isAlive();
hawk.eat();
hawk.sleep();
hawk.fly();
console.log(`\n`);