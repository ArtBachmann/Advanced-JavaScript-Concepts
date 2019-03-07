
// Javascript code 
console.log('1')
// part of web API next and JS Engine sends it to web API because it is part of it. And call stack is empty.
setTimeout(() => {
  // next line is callback code and is sent back to JS Engine.
  console.log('2')
}, 1000);
// next line doesen't wait nand gets to the call stack.
console.log('3')

// SUPER  !!!
// Event loop checkes if the call stack is empty and then crabs callback from the Callback Que (callback is a function which is executed later.)