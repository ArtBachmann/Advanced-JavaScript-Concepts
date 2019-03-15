// Higher order functions, not much to explain here.

const giveAccessTo = (name) =>
  'Access Granted To ' + name

// We now tell WHAT DATA TO USE

function authenticate(veify) {
  let array = []
  for (let i = 0; i < veify; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function sing(person) {
  return 'la laa laaaa , my name is  ' +
    person.name
}

// function knows what data to use and what to do also
function letPerson(person, fn) {
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }

}

let c = letPerson({ level: 'user', name: "Art" }, sing)

console.log(c)

// Exercise

// const multiplyBy = function (num1) {
//   return function (num2) {
//     return num1 * num2
//   }
// }

// The same function as above>>>
const multiplyBy = (num1) => (num2) => num1 * num2

// const multiplyByTwo = multiplyBy(2)
// const multiplyByFive = multiplyBy(5)
// b = multiplyByTwo(3)
// e = multiplyByFive(44)

// console.log(b)

// And again all the above is useless>>>
const e = multiplyBy(5)(9)
console.log(e)