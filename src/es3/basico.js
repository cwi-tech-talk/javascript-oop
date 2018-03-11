function Person(name) {
    this.name = name;    
}

function Pet(name, age, owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
}

Pet.prototype.getDetails = function() {
    return this.isAvailable() ? 
        this.name + ' tem ' + this.age + ' anos de idade e está disponível para adoção.' : 
        this.name + ' pertence a ' + this.owner.name + ' e tem ' + this.age + ' anos de idade.';
}

Pet.prototype.isAvailable = function() {
    return !this.owner;
}


/** teste */
var owner = new Person('robson');
var pet = new Pet('jeremias', 2, owner);
console.info(pet.getDetails());
console.log(pet.isAvailable() ? 'adote ' + pet.name : 'cumprimente ' + pet.name);