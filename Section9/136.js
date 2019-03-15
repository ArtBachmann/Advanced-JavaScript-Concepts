// 1. call stack
// 2. memory heap
// 3. web api
// 4. callback queue -> task queue
// 5. event loop

// missing piece of runtime >> Job Queue >> microtask queue, event loop chekes this first (before callback queue)

setTimeout(() => {
  console.log('1')
}, 0);

Promise.resolve('hi').then((data) => console.log('2', data))

console.log('3', 'is a first one.')