
// Hoisting

console.log('1--------')
console.log(teddy)
console.log(sing())
var teddy = 'bear'
function sing() {
  console.log('ododo  sosoos')
}

// Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted. Any assignments are left where they are. 

// In JavaScript, a variable can be declared after it has been used.

//In other words; a variable can be used before it has been declared.


// Example

a() // bye

function a() {
  console.log('hi')
}

function a() {
  console.log('bye')
}

// Beacause JS Engine rewrotes the place in memory with the second function  it prints out 'bye' !!!

// Probably the interview question 2 l30

var favouriteFood = "grapes";

var foodThoughts = function () {
  console.log("Original favourite food: " + favouriteFood);

  var favouriteFood = "sushi";

  console.log("New favourite food: " + favouriteFood);
};

foodThoughts() // new execution context is created! This is the point. And hoisting again begins also.

// OK Hoisting takes place in EVERY execution context >> that means that in the function there is new extution after the global execution context is finished. Every time function runs then the new execution context is created. Creation and Execution phases again. ALL possible elements are hoisted, even the first lines var favoriteFood. All will be hoisted and defined to undefined. Use let and const and avoid hoisting, otherwize error will occur.