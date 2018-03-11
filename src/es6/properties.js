class Person {
    constructor(name) {
        this.name = name;
    }
}

let symbolName = Symbol();
let symbolAge = Symbol();
let symbolOwner = Symbol();

class Pet {
    constructor(name, age, owner) {
        this[symbolName] = name;
        this[symbolAge] = age;
        this[symbolOwner] = owner;
    }

    get name () {
        return this[symbolName]; 
    }

    get age () {
        return this[symbolAge]; 
    }

    get owner () {
        return this[symbolOwner]; 
    }

    set owner (value) {
        this[symbolOwner] = value; 
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

console.info(dog.name);
dog.name = 'novo tobi';
console.info(dog.getDetails());

console.info(cat.name);
cat.name = 'nova pantera';
console.info(cat.getDetails());