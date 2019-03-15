// Functions art first class zitizens in JS
// 1 assign function to variable
var stuff = function () { }
// 2 pass around
function a(fn) {
  fn()
}
a(function () { console.log('Hii') })


//3 return as a value
function b() {
  return function c() { console.log('buuuuja ') }
}

console.log(b()())

var d = b()

// functions are data.

// default params.
function a(params = 2) {
  return params
}

a()