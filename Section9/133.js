// async await, three different versions


// Async single data fetchig
async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resp.json()
  console.log(data)
}

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

// Promises version
Promise.all(urls.map(url =>
  fetch(url).then(resp => resp.json())
)).then(array => {
  console.log('users', array[0])
  console.log('posts', array[1])
  console.log('albums', array[2])
}).catch('oioioi')


// Async version
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (err) {
    console.log('oioioi', err)
  }
}



