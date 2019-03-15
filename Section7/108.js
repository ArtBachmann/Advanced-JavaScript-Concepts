// no side effects
// input --> output

// Referetial transparency. same input always same output.

// Idempotence:

// 1. calling a function multiple times always results the same. Always does what we expect it to do.
// 2. code is good to be predictible.
// 3. can call yourself over and over again.
// 4. May not be pure but anyway doesent change.
// 
function notGood() {
  return Math.random() * 10
}
console.log(notGood(30))

// 113 Imperative vs declarative.

// imperative >> for (let i = 0; ...
// declarative [1, 2, 3].forEach(item => console.log(item))

// 114 Immutability

const obj = { name: 'Art' }
function clone(obj) {
  return { ...obj } // pure
}
obj.name = 'Aks' // mutated
// if you want to change without mutation
function updateName(obj1) {
  const obj2 = clone(obj)
  obj2.name = 'Riks'
  return obj2
}
const updatedObj = updateName(obj)
console.log(obj, updatedObj)
