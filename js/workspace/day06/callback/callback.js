// 2개의 정수를 받아서 두 정수를 더한 후 기능 1// 출력 기능 2

let num1 = 3;
let num2 = 10;

const add = (num1, num2, callback) => {
  callback(num1 + num2)
}

const print = (value) => {
  console.log(value)
}

const multiply = (value) => {
  console.log(value * 2)
}

print('홍길동')
add(num1, num2, print)
add(num1, num2, multiply)