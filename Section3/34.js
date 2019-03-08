
// this, arguments, Variable Environment

// eact execution context is it's own universe === Variable Environment.

function two() {
  var isValid // undefined
}


function one() {
  var isValid = true // local env.
  two() // new EC
}

var isValid = false
one()

// Execution Context in the stack. Now all in the global variable environment.

// two() -- udefined
// one() -- true 
// global()-- false