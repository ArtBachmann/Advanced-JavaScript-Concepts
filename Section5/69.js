

//closures are combination of functions and lexical Scope.

function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return ` ${grandpa} > ${father} > ${son}`
    }
  }
}

//console.log(a()()())


// arrow version of closure
const boo = (string) => (name1) => (name2) =>
  (`${string} ${name1} ${name2}`)

const ab = boo('hei')('Art')('ja Aks')
console.log(ab)


// Exercise 
function callMaybe() {
  const callMe = 'Hi I there'
  setTimeout(() => {
    console.log(callMe)
  }, 2000);
}

callMaybe()

// Web API starts the timer , callback que, execution phase, creation phase, 

// Exercise 

//Memory eficciency
function heavyDuty(index) {
  const bigArray = new Array(7000).fill('***')
  console.log('created!')
  return bigArray[index]
}
console.log(heavyDuty(666))
console.log(heavyDuty(666))
console.log(heavyDuty(666))

var getHeavyDuty = heavyDuty2()
// console.log(getHeavyDuty(66))
// console.log(getHeavyDuty(6))
// console.log(getHeavyDuty(666))
getHeavyDuty(66)

// Same as previous but with closure
function heavyDuty2() {
  const bigArray = new Array(7000).fill('***')
  console.log('created Again')
  return function (index) {
    return bigArray[index]
  }
}

// Encaptulation

const makeNuclearButton = () => {
  let timeWithoutDestruction = 10;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '💥';
  }

  setInterval(passTime, 1000);
  return { totalPeaceTime }
}

const ww3 = makeNuclearButton();
console.log(ww3.totalPeaceTime())
//console.log(ww3.launch())    >>> launch is encapsulated.


// Exercise 2
// Goal is to create function that envokes only once.

let view
function initialize() {
  let called = 0
  return function () {
    if (called > 0) {
      return
    } else {
      view = '&&&'
      called++
      console.log('View set!')
    }
  }
}

const startOnce = initialize()
startOnce()
startOnce()

// Exercise 3
// Make with closure to work so that all numbers are loope separately, befor all come 4 (usual problem)

const array = [1, 2, 3, 4]
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(() => {
      console.log('I am at index ' + array[closureI])
    }, 3000)
  })(i)
}

