// Threads, concurrency, parallelism

// Browser creates new thread of js when opening in the new tab.
// Browser has web workers (workers threads)

// var worker = new Worker('worker.js')
// worker.postMessage('Hellooo!')

// addEventListener('message')

// web workers run in the backround
// fetch() => calls web api
// Single-core CPU
// Multi-Core CPU 

// Remember eating with one hand picture
// JAVASCRIPT is itself single threaded, synchronous.
const { spawn } = require('child_process')
a = spawn('git', ['stuff'])
console.log(a)