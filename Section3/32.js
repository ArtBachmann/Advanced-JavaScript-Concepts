// Prograns are signing memory (variable) and then running the functions to do smth. with tehse variables.

// Function Declaration
function india() {
  console.log('warm')
}

// Function Expression 
let canada = () => {
  console.log('cold')
}

india()
canada()

// Each execution context gets "this" and "arguments", if function has no arguments the empty arguments object exists anyway.

function marry1(person1, person2) {
  console.log('arguments', arguments)
  console.log(Array.from(arguments)) // method to parse arguments from object to an array.
  return `${person1} is now married with ${person2}`
}

marry1('Art', 'Annabel')
//arguments [Arguments] { '0': 'Art', '1': 'Annabel' }
// arguments keyword gives an object with inserted parameters and it exists only in the new execution context inside function. Means that global execution context dont have it.


// With spread operator same function
function marry2(...args) {
  console.log('arguments', args)
  //console.log(Array.from(arguments)) // method to parse arguments from object to an array.
  return `${args[0]} is now married with ${args[1]}`
}

marry2('Sulev', 'Piret')
