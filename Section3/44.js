
// call() apply()
// all functions have proprty call() under the hood and  apply() 

// Example how to use methods in multiple places.

const wizard1 = {
  name: 'Art',
  health: 50,
  heal(num1, num2) {
    return this.health += num1 + num2
  }
}
// 'this' in the method makes it dynamic. 

const archer1 = {
  name: 'Robin Hood',
  health: 30
}

console.log(wizard1.heal.call(archer1, 44, 55))

// previous ex. shows how heal method can be used in another object with call() method. Simple. And see that arguments can be used also.
// apply() does the same thing but takes in an array [num1, num2]


// Same example with bind(), which returns the method (needs variable to put into) bind() lets to store for later use.

const wizard2 = {
  name: 'Art',
  health: 50,
  heal(num1, num2) {
    return this.health += num1 + num2
  }
}
// 'this' in the method makes it dynamic. 

const archer2 = {
  name: 'Robin Hood',
  health: 30
}
const healArcher = wizard2.heal.bind(archer2, 44, 55)
console.log(healArcher())

// def. bind() is useful to call functions later on in certain contex.

// exercise

const array = [1, 2, 3];

function getMaxNumber(arr) {
  //code here  
  return arr.pop()
}
let a = getMaxNumber(array)
// should return 3
console.log(a)

// The teachers version

const array = [1, 2, 3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

getMaxNumber(array)



