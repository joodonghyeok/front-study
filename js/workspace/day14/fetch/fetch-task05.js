// https://jsonplaceholder.typicode.com/users
// 데이터를 요청한 후 users 정보에서 city를 가져온다
// 모두 대문자로 바꾸고 알파벳 중 A의 개수를 세서 콘솔에 출력

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!response.ok) throw new Error(`${response.status} Error!`)
  const users = await response.json()
  if(!users.length) return console.error(`not found users : ${users}`)
  return users
}

// getUsers()
//   .then((users) => users.map((user) => user.address.city))
//   .then((users) => users.join("").toUpperCase())
//   .then((str) => {
//     let count = 0;
//     for(let s of str){
//       if(s == 'A'){
//         count++
//       }
//     }
//     return count
//   })
//   .then(console.log)

// getUsers()
//   .then((users) => users.map((user) => user.address.city))
//   .then((users) => users.join("").toUpperCase().split(""))
//   .then((strArr) => strArr.filter((s) => s === 'A').length)
//   .then(console.log)

// getUsers()
//   .then((users) => users.map((user) => user.address.city))
//   .then((users) => users.join("").toUpperCase().split(""))
//   .then((strArr) => strArr.filter((s) => s.includes('A')))
//   .then((strArr) => {
//     let count = 0;
//     strArr.forEach((s, i) => {
//       count++
//     })
//     console.log(count)
//   })

getUsers()
  .then((users) => users.map((user) => user.address.city))
  .then((users) => users.join("").toUpperCase().split("A").length - 1)
  .then(console.log)








