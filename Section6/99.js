class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

// subclass and base class or super class
// extends creates the prototype chain to Character.
// 'super' must be called first before we can use 'this' and 'this' is asking who is calling me? and this is set to new class >> in our case Elf.

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
  }
}

// 'extends doesent make copies but links to inheriting class. (actually object because in js there is no classes but object inherits from object.)
class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  makeFort() {
    return 'strongest fort in the world'
  }
}

// instantiation
const fiona = new Elf('Fiona', 'cloth', 'house')
//console.log(fiona.attack())

const shrek = new Ogre('Shrek', 'club', 'green')
console.log(shrek.makeFort())

// To check inheritanco or prototype chain use keyword instanceof (when we use a new keyword to create new object of a class)
console.log(shrek instanceof Ogre)