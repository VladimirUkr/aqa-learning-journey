class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // вызывает constructor родителя (BasePage)
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

const newAnimal = new Dog("Buddy", "Golden Retriever");
newAnimal.makeSound();
newAnimal.bark(); 