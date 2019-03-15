// HOC

const hof1 = () => () => 5 * 5
console.log(hof1()())

// const hof2 = (fn) => fn(5)
// hof2(function a(x) { return x })
// console.log(hof2()())

// Closure
// can be used to create data privacy. 
// used very ofton but do not modify the state.
const closure = function () {
  let count = 22
  return function getCounter() {
    return count
  }
}

const getCounter = closure()
console.log(closure()())
console.log(getCounter())

// 116 currying
const multiply = (a, b) => a * b // regular arrow f.
const curriedMultiply = (a) => (b) => a * b // curried f.
console.log(curriedMultiply(4)(5))

// now we can create utility functions.
cu = curriedMultiplyBy5 = curriedMultiply(5)
//cu = curriedMultiplyBy5
console.log(cu(77))

// 117 Partial Application.
// produce a function with smaller number of parameters.
const multiplyPartial = (a, b, c) => a * b * c// regular arrow f.
const partialdMultiplyBy5 = multiplyPartial.bind(null, 5)
console.log(partialdMultiplyBy5(4, 50))

