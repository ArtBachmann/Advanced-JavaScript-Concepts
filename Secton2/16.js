// Stack overflow

// Creating function that calls for himself (known as recursion)
function inception() {
  inception()
}

console.log(inception()) // avoid this >>> RangeError: Maximum call stack size exceeded