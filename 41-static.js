// static = keyword that define properties or methods that belong
//          to a class itself rather than the objects created
//          from that a class (class own anything static, not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return 2 * radius;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(6));
console.log(MathUtil.getCircumference(6));
console.log(MathUtil.getArea(6));
console.log(`\n\n`);


class User{
    static userCount = 0;

    constructor(username){
        this.username = username,
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are users ${User.userCount} online`)
    }

    sayOnline(){
        console.log(`I am ${this.username}, i'm online`)
    }
}


const user1 = new User("mascin");
const user2 = new User("acin");
const user3 = new User("macin");

user1.sayOnline();
user2.sayOnline();
user3.sayOnline();
User.getUserCount();