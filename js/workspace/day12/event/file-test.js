const file = require("fs");

// const user = new Object();

// user.name = "김세환";
// user.id = "ksh1234";
// user.password = "1234";

// const userJSON = JSON.stringify(user)
// console.log(user)
// console.log(userJSON)

// file.writeFile('경로', '파일', '인코딩', '콜백함수')
// file.writeFile('user.json', userJSON, 'utf-8', (error) => {
//   if(error){
//     console.error(error)
//   }else {
//     console.log("출력 완료!")
//   }
// })

let foundUser;

// file.readFile('경로', '인코딩', '콜백함수')
// file.readFile('user.json', 'utf-8', (error, content) => {
//   foundUser = JSON.parse(content)
// })

foundUser = JSON.parse(file.readFileSync('user.json', 'utf-8'))

console.log(foundUser)