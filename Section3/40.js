
// THIS

// this is the object that the function is a property of
//obj.someFunc(this)

// this refers to the obj.
// Why useful? 
// 1: gives methods to access to their objects
// 2: execute same code for multiple objects

function a() {
  console.log(this)
}
// a()

const obj = {
  name: 'Art Bachmann',
  sing() { // new syntax
    return `hoo hoo  ${this.name}`
  },
  singAgain() {
    return `this.sing() !`
  }
}

//console.log(obj.singAgain()) // this refers to the left it got

// example for: execute same code for multiple objects

function importantPerson() {
  console.log(this.name)
}

const name = 'Art'

const obj1 = {
  name: 'Aks',
  importantPerson
}

const obj2 = {
  name: 'Riks',
  importantPerson
}

importantPerson()


