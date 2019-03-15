// Constructor functions.

// All constructor functions must be created with new keyword and capital letter.
// Every function in JS gets automatically prototype: {} to which we can add our own prototype properties.

// with constructor function new execution context is created and 'this' is available.(arguments also.) 'This' will point to the calling object (peter, or whatever object is created.)
function Elf(name, weapon) {
  this.name = name
  this.weapon = weapon
}

// use 'prototype' to add functionality.
// with 'function()' 'this' is now dynamically scoped and whoever can call it, it doesent matter where it is written.
// arrow functions could not be used because of lexical this.
Elf.prototype.attack = function () {
  return 'attack with ' + this.weapon
}

// now can create similar functions.
// 'this' becomes peter because of 'new'
const peter = new Elf('Pete', 'fire')
console.log(peter.attack())

// shadowing >> when same (named) variables in different scopes.

// arrow functions are lexically scoped. 'This' is defined where they written. In our case global is surrounding 