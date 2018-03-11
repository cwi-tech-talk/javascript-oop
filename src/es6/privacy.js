class Person {
    constructor(name) {
        this.name = name;
    }
}

class Pet {
    constructor(name, age, owner) {
        let _name = name;
        let _age = age;
        let _owner = owner;

        this.getDetails = function() {
            return this.isAvailable() ? 
            _name + ' é um ' + this.getType() + ' que tem ' + _age + ' anos de idade e está disponível para adoção.' : 
            _name + ' é um ' + this.getType() + ' que pertence a ' + _owner.name + ' e tem ' + _age + ' anos de idade.';
        }
    
        this.getType = function() {
            return 'pet';
        }
    
        this.isAvailable = function() {
            return !_owner;
        }
    
        this.speak = function() {
            return 'Pets do not speak, asshole';
        }
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

console.info(dog._name);
