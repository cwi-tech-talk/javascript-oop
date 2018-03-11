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
var dog = new Dog('Tobi', 12, null);
var cat = new Cat('Pantera', 4, null);

function campanha(pet) {
    console.info(pet.getDetails());
}

campanha(cat);
campanha(dog);