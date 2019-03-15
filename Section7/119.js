// Memoization & caching (store  values to use later on)
// Speed up programs and store data in easyly accessible box. Memoization is a special form of caching.

function addTo80(n) {
  return n + 80
}


function memoizedAddTo80() {
  let cache = {}
  return function (n) {
    if (n in cache) {
      return cache[n]
    } else {
      console.log('long time')
      cache[n] = n + 80
      return cache[n]
    }
  }
}

const memoized = memoizedAddTo80()
console.log('1', memoized(7))
console.log('2', memoized(7))

// Allows to be very efficcient.
