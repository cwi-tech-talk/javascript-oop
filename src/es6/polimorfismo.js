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
    constructor(name, age, owner) {
        super(name, age, owner);
    }

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
var dog = new Dog('Tobi', 12, null);
var cat = new Cat('Pantera', 4, null);

function campanha(pet) {
    console.info(pet.getDetails());
}

campanha(cat);
campanha(dog);