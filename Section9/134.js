// Object spread operator

const animals = {
  tiger: 14,
  lion: 23,
  monkey: 14
}

const { tiger, ...rest } = animals

console.log(tiger)
console.log(rest)

// finally
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
}).catch(err => console.log('oioioi', err))
  .finally(data => console.log('extra', data))


// for await of

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

// Older example
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

// new version with for await of
// fetch() is still little confusing.
const getData2 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url))
  for await (let request of arrayOfPromises) {
    const data = await request.json()
    console.log(data)
  }
}
