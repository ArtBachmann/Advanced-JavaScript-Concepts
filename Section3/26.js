function printName() {
  return 'Art Bachmann'
}

function findName() {
  return printName()
}

function sayMyName() {
  return printName
}

sayMyName()

// --------------------------------


// Everything in JS in Global Execuion context or in Function. 

// There are two phases in progran run period: 1. The creation phase and 2. the exexution phase.

// Lexical scope (environment)>> where smth. is written (read the previous line) >> determines our available variables.

// Dynamic scope is where function is called.

// When JS Engin starts running it crratesa a Global execution context and gives to it Global Object (Global or Widnow) and this (what is smth like very funny thing....like replacement depending where it is defined) The third important element is Hoistin (or possibility to hoist)

// 