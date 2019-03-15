//import { reject } from "async";

// How JavaScript works. Just to remember.

// Promises are objects, that may produce a single value some time in the future (are like event listeners, but can fail only once.)
// Fullfilled, rejected or pending
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('It worked')
  } else {
    reject('error')
  }
})

// promise is result. Chaining promises.
p = promise
  .then(result => result + '!')
  .then(result2 => {
    console.log(result2)
  })
  .catch(() => console.log('error!'))

console.log(p)