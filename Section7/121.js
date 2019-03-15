// Compose

// data --> fn --> data --> fn -->
n1(fn2(fn3(55)))
compose(fn1, fn2, fn3)(55)
pipe(fn3, fn2, fn1)(55)

const compose = (f, g) => (data) => f(g(data))

const multiplyBy3 = (num) => num * 3

const makePositive = (num) => Math.abs(num)

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

result = multiplyBy3AndAbsolute
console.log(result(-33))

// pipe >> right to left
const pipe = (f, g) => (data) => g(f(data))


// arity 
// how many arguments the functions take. Less parameters better
// Is functional answer to everything.