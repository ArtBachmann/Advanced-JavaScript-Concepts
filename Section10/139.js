// Modules >> separation of concerns.
// Import code.
// tight coupling
// memory leaks

// Module Pattern

//IIFE
(function () {

})()

// Problems with module pattern : We dont know all the dependencies, order matters!!!

// Common JS and AMD 
var module1 = require('module1')
var module2 = require('module2')

function fight() {

}

module1.exports = {
  fight: fight
}

// browserify script.js > bundle.js


// ES6 Modules

import module1 from 'module1'

export function jump() {

}