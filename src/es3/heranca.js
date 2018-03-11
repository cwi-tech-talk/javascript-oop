/** person */
function Person(name) {
    this.name = name;    
}


/** pet */
function Pet(name, age, owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
}

Pet.prototype.getDetails = function() {
    return this.isAvailable() ? 
        this.name + ' é um ' + this.getType() + ' que tem ' + this.age + ' anos de idade e está disponível para adoção.' : 
        this.name + ' é um ' + this.getType() + ' que pertence a ' + this.owner.name + ' e tem ' + this.age + ' anos de idade.';
}

Pet.prototype.getType = function() {
    return 'pet';
}

Pet.prototype.isAvailable = function() {
    return !this.owner;
}

Pet.prototype.speak = function() {
    return 'Pets do not speak, asshole';
}


/** dog */
function Dog(name, age, owner) {
    Pet.call(this, name, age, owner);
}

Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.getType = function() {
    return 'cachorro';
}

Dog.prototype.speak = function() {
    return 'latido';
}

/** cat */
function Cat(name, age, owner) {
    Pet.call(this, name, age, owner);
}

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.getType = function() {
    return 'gato';
}

Cat.prototype.speak = function() {
    return 'miau';
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