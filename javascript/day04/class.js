class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printInfo() {
        console.log(`${this.name}: $${this.price}`);
    }
}

const testProduct1 = new Product("PC", 1000);
const testProduct2 = new Product("Mouse", 250);

testProduct1.printInfo(); // PC: $1000
testProduct2.printInfo(); // Mouse: $250