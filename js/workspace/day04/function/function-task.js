// 브론즈
// 1. 어떤 값을 받으면 값을 출력해주는 함수
const printValue = (value) => {
  console.log(value)
}

printValue("안녕하세요😎")

// 2. 3개의 정수를 받아서 3개의 정수를 모두 빼주고 값을 반환(리턴)하는 함수
// 디폴트 파라미터
const subtract = (num1 = 0, num2 = 0, num3 = 0) => {
  return num1- num2- num3
}

let result2 = subtract(10, 3, 2)
console.log(result2)

// 스코프
const func1 = (num1 = 0, num2 = 0, num3 = 0) => {
  return num1- num2- num3
}
const func2 = (num1 = 0, num2 = 0, num3 = 0) => {
  return num1- num2- num3
}




// 실버
// 1. 홍길동을 n번 출력해주는 함수
// 2. 사용자가 입력한 정수까지 모두 더해서 값을 알려주는 함수
// ex) sum(10) 1 + 2 ... + 10 == 55

// 골드
// 1. 1~n까지 홀수만 출력해주는 함수
// 2. 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수
// "abcde".charAt(0) == a