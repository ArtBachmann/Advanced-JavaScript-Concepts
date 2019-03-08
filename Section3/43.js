
// Dynamic vs lexical scope

const func = function () {
  const obj = {
    name: 'Art',
    sing() {
      console.log('a', this)
      var newFunction = function () {
        console.log('b', this)
      }
      newFunction()
    }
  }
  return obj
}

//console.log(func())

// Idea is that 'this' is not lexically scoped but where it is called. Dynamic scope is where the function is called. Everything in JS is lexically scoped EXEPT the this keyword.

// Fix it with arrow functions which are lexically bound. They have lexical 'this' behaviour.

const func1 = function () {
  const obj = {
    name: 'Art',
    sing() {
      console.log('a', this)
      var newFunction = () => {
        console.log('b', this)
      }
      newFunction()
    }
  }
  return obj
}

//console.log(func1())


// just playing.. Works well and now i got the point.


const obj = {
  name: 'Art',
  sing() {
    console.log('a', this)
    var newFunction = function () {
      console.log('b', this)
    }
    newFunction()
  }
}

console.log(obj.sing())