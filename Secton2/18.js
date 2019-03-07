// Memory Leaks , (Garbage colletction cant word)

// Infinite Loops cause them (one example)
let array = []
for (let i = 5; i > 1; i++) {
  console.log(array.push(i - 1))
}

/// Examples...

// Global variable
var a = 1 // if them are added more and more

// Event listeners >> remove always when no needed.
// Especially when moving back and forth in two pages an new listens are added
var element = document.getElementById('button')
element.addEventListener('click', onclick())

// setInteval >> when not cleared and stopped
setInterval(() => {
  // referencing objects
}, 1000);

