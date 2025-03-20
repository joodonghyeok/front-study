// https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")

// 1. 데이터를 요청 후 이메일만 출력하기
// ex) test@gmail.com -> ["test", ...] 


const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!response.ok) {
    return;
  }
  const users = response.json()
  return users;
}

// getUsers()
//   .then((users) => users.map((user, i, users) => user.email))
//   .then((emails) => emails.map ((email) => email.split("@")[0]))
//   .then((names) => names.forEach((name) => {
//     console.log(`이름 : ${name}`)
//   }))
//   .catch((err) => console.error(err))





// 2. street을 가져와서 모두 거꾸로 출력하기
// ["Kulas Light", ...] -> ["thgiL saluK", ...]

getUsers()
  .then((users) => users.map((user) => {return user.address.street}))
  .then((streets) => streets.map((street) => street.split("").reverse().join("")))
  .then((reversed) => reversed.forEach((rever) => console.log(rever)))
  .catch((err) => console.error(err))