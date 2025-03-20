// ES6 Promise
const promise = new Promise((resolve, reject) => {
  check = false;
  if(check){
    resolve("성공!")
  }else {
    reject("실패")
  }
})

promise.then((result) => { console.log( result )}).catch((error) => {console.error(error)})