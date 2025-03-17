// 변수 a와 변수 b, 변수 temp를 전역변수로 만들고
// changeNumber(a, b)를 전달 받아 함수를 사용하면
// 변수 a와 변수 b의 값을 바꿔주는 함수 만들기

// let a = 10
// let b = 20

// function test(a, b){
//   a와 b 값 변경
// }
// console.log(a) // 20
// console.log(b) // 10

globalThis.a = 10;
globalThis.b = 20;
globalThis.temp = 0;

const changeNumber = (num1, num2) => {
  globalThis.temp = num1;
  globalThis.a = num2;
  globalThis.b = temp;
}

changeNumber(globalThis.a, globalThis.b)
console.log(globalThis.a) // 20
console.log(globalThis.b) // 10