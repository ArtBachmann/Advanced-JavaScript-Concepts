
// function scope >> each time f. is executed creates a new execution coctext which has it's own variable environment.

// Block scope >> in most programming languages.

// let and constant

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log('final', i)
}
loop()

// Simple >> in the loop i becomes 5 and loop finishes with 4 and outside of the loop one more i is left which becomes 5 printed out.!! 

// with let 

function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log('final', i)
}
loop()

// reference error because outer side of the loop i is not seen. Outside of environment.
