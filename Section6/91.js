// factory functions, f. that creates objects for us.
// Object.create() >> creates prototype chain. >> in this case creates a link between createElf and elfFunctons.


const elfFunctions = {
  attack() {
    return 'attack with ' + this.weapon
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions)
  newElf.name = name
  newElf.weapon = weapon
  return newElf
}

// now can create similar functions.
const pete = createElf('Pete', 'fire')
pete.attack = elfFunctions.attack

peter = pete.attack()

console.log(peter)



