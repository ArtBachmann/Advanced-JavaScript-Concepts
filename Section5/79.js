
// Prototypal inheritance
// Prototype chain 

let dragon = {
  name: 'Art',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Aks',
  fight() {
    return 0
  }
}

lizard.__proto__ = dragon
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop)
  }
}

// All functions have call(), apply(), bind()
// __proto__ acts like a link to base object(function, array, ) >>
// Array.prototype === array.__proto__

let human = {
  mortal: true
}

let me = Object.create(human)
me.age = 49
console.log(human.isPrototypeOf(me))


// Only functions have the prototype proerty.

// Base object has a prototype too because of Object constructor. Object is a function because is has the prototype.  Object.prototype is the base object. >> Very last piece of the very last object. (before null)


