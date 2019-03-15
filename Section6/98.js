// 'new' binding this
function Person(name, age) {
  this.name = name
  this.age = age
}

// person1 is the 'this'
const person1 = new Person('Art', 44)
console.log(person1)

// implicit binding
// 'this' is the object itself, most common
const person2 = {
  name: 'Aks',
  age: 10,
  hi() {
    console.log('hi' + this.name)
  }
}
person2.hi()

// explicit binding
// with bind() what is needed to be 'this', here 'window'
const person3 = {
  name: 'Riks',
  age: 20,
  hi: function () {
    console.log('hi' + this.setTimeout)
  }.bind(global)
}
console.log(person3.hi())


// Dynamically scoped 'this' gets determined when it is called

// arrow function
// Lexically scoping >> whereever 'this' is written there it is bind to.
// In this situation witholut arrow function 'this' would be window object.

const person4 = {
  name: 'Kusti',
  age: 2,
  hi: function () {
    const inner = () => {
      console.log('hi ' + this.name)
    }
    return inner()
  }
}
console.log(person4.hi())

