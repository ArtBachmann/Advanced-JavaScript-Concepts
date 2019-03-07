
// inine caching
// not clear yet
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}


const userData = {
  firstName: 'Art',
  lastName: 'Bach'
}

console.log(findUser(userData))

console.log('found Art Bach')

