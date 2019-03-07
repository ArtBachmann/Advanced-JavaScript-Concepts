// Prograns are signing memory (variable) and then running the functions to do smth. with tehse variables.

// Function Declaration
function india() {
  console.log('warm')
}

// Function Expression 
let canada = function () {
  console.log('cold')
}

india()
canada()

function marry(person1, person2) {
  console.log('arguments', arguments)
  console.log(Array.from(arguments)) // method to parse arguments from object to an array.
  return `${person1} is now married with ${person2}`
}

marry('Art', 'Annabel')
//arguments [Arguments] { '0': 'Art', '1': 'Annabel' }
// arguments keyword gives an object with inserted parameters and it exists only in the new execution context inside function.