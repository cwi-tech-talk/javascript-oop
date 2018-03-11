class Person {
    constructor(name) {
        this.name = name;
    }
}

class Pet {
    constructor(name, age, owner) {
        this.name = name;
        this.age = age;
        this.owner = owner;
    }

    getDetails() {
        return this.isAvailable() ? 
        this.name + ' é um ' + this.getType() + ' que tem ' + this.age + ' anos de idade e está disponível para adoção.' : 
        this.name + ' é um ' + this.getType() + ' que pertence a ' + this.owner.name + ' e tem ' + this.age + ' anos de idade.';
    }

    getType() {
        return 'pet';
    }

    isAvailable() {
        return !this.owner;
    }

    speak() {
        return 'Pets do not speak, asshole';
    }
}

class Dog extends Pet {

    getType() {
        return 'cachorro';
    }

    speak() {
        return 'latido';
    }
}


class Cat extends Pet {
    constructor(name, age, owner) {
        super(name, age, owner);
    }

    getType() {
        return 'gato';
    }

    speak() {
        return 'miau';
    }
}

/** teste */
var owner = new Person('robson');

var pet = new Pet('jeremias', 2, null);
console.info(pet.getDetails());
console.info(pet.speak());
console.log(pet.isAvailable() ? 'adote ' + pet.name : 'cumprimente ' + pet.name);
console.log('');
console.log('');

var dog = new Dog('Tobi', 12, owner);
console.info(dog.getDetails());
console.info(dog.speak());
console.log(dog.isAvailable() ? 'adote ' + dog.name : 'cumprimente ' + dog.name);
console.log('');
console.log('');

var cat = new Cat('Pantera', 4, owner);
console.info(cat.getDetails());
console.info(cat.speak());
console.log(cat.isAvailable() ? 'adote ' + cat.name : 'cumprimente ' + cat.name);
console.log('');
console.log('');