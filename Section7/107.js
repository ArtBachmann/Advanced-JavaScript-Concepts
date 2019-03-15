// Amazon shopping
// The idea of functional programming is to minimal mutationsn, not to absolutely avoid them (mutations) Pure functions. Function without return statement is just a procedure.
// 1. Clear and understandable, predictable, Easy to maintain,  Easy to extend, DRY, Memory efficient.
const user = {
  name: 'Art',
  active: true,
  cart: [],
  purchases: []
}

let amazonHistory = []
// pipe works when redirect functions workflow and also arrang the variables.

// functions will be executed from bottom to up (right to left.)
// compose function, usually use library (ramda). Here if we need more functionality just add some more functions into to factory.
const compose = (f, g) => (...args) => f(g(...args))
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: 'laptop', price: 445 })

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  amazonHistory.push(user)
  const updateCart = user.cart.concat(item)
  // next returning new user state.
  return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user) {
  amazonHistory.push(user)
  return { cart } = user
  const taxRate = 1.3
  const updateCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, { cart: updateCart })
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { cart: [] })
}

// 
const userReal = user
console.log(userReal)

// functionality to go back and forth the time
console.log(amazonHistory)

// can create new functions
//function getUserState


// Inheritance => super class is extended.
// Composition => smaller pieces combinend