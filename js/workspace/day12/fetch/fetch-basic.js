// https://jsonplaceholder.typicode.com/users
// console.log(fetch("https://jsonplaceholder.typicode.com/users"))

// fetch API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => result)
  .catch((error) => console.error(error))

  