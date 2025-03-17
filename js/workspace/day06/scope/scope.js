// 함수 레벨 스코프
function myFunc(){
  if(true){
    let a = 10
    console.log(a) // 10
  }
  // console.log(a) // x
}
// myFunc()
// console.log(a) // x


globalThis.x = 10
function myFunc2(){
  let x = 20;
  globalThis.x = 30
  console.log(globalThis.x)
}

myFunc2()
console.log(x)