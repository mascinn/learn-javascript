// class = (ES6 feature) provides a more structured and cleaner way to
//          work with object compared to traditional constructor functions
//          ex. static keywords, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}


const salesTax = 0.5;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 20.55);

const totalPriceProd1 = product1.calculateTotal(salesTax);
const totalPriceProd2 = product2.calculateTotal(salesTax);


product1.displayProduct();
console.log(`Total price with tax: ${totalPriceProd1}\n`);

product2.displayProduct();
console.log(`Total price with tax: ${totalPriceProd2}`);