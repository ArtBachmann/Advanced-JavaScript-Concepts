
// function currying
// method for creating a new method with binding another method for later use.

// Context determins HOW function is envoked and Scope is the visibility of variables.

// extesible functons cool.
function multiply(a, b) {
  return a * b
}
let multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(3))

// some experiments with this to understand its workings.

var b = {
  name: 'me',
  say() { console.log(this) }
}

var c = {
  name: 'me',
  say() { return function () { console.log(this) } }
}

var d = {
  name: 'me',
  say() { return () => console.log(this) }
}

//c.say()()// conclusions >> method that has a function inside its 'this' gets bound to window object. Dymamically scoped this.

console.log(d.say()())


// next exercise
// must remember how to do this kind of stuff.

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
