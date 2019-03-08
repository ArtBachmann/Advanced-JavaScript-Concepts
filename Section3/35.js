// Scope Chain

var x = 'x'
function findName() { // written in global space, have global lexica environment.
  console.log(x) // works.
  var b = 'b'
  return printName()
}

function printName() {
  var c = 'c'
  return 'Art Bachmann'
}



function sayMyName() {
  var a = 'a'
  return findName()
}

sayMyName()

// Link to outer environment exists from each execution context. outer environment depends where the functions sits lexiclally.(were f. is written) fuctions have access to a global scope

// Scope chain links to our parent environment.
// Lexical scope === own data + variables where the function is defined >> static scope.

// Same function but written differently
var a = 'aaa'
function sayMyName() {

  return function findName() {
    var b = 'b'
    var c = 'ccc'
    return function printName() {
      console.log(a)
      console.log('Art')
    }
  }
}

sayMyName()()()() // Remember this kind of function call, means that there is a function chain, shows how far is the function ment to be called >>> very funny this call (one pair of parenthesis more ) went to read these comments and then collapsed.

// Linking from function to function == function lexical environment
// local scope

// Rember >> [[Scopes]]: Scopes[1] built in functionality in javascript. And the parent Global has Scopes[[0]]


