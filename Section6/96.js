
//ES 6 Class

class Elf {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

// instantiation
const sam = new Elf('Sam', 'eggs')
console.log(sam instanceof Elf)