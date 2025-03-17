// 두 수를 빼서 출력하기
const subtract = (num1, num2, callback) => {
  callback(num1 - num2)
}

const print = (value) => { console.log(value) }

subtract(10, 25, print)
subtract(10, 25, (result) => {console.log(result)})

// 성과 이름을 받아서 연결하고 출력해주는 함수 
const connect = (lastName, firstName, callback) => {
  callback(lastName + firstName)
}

connect("홍", "길동", print)

// 두 정수의 덧셈 결과를 출력하기
const sum = (num1, num2, callback) => {
  callback(num1 + num2)
}

sum(100, 200, print)

// 두 정수의 곱셉 결과를 출력하기
const mul = (num1, num2, callback) => {
  callback(num1 * num2)
}

mul(10, 20, print)

// 성과 이름을 전달받아서 "OOO님 환영합니다"를 출력하기
const getFullName = (lastName, firstName, callback) => {
  callback(lastName + firstName + "님 환영합니다")
}

getFullName("장", "보고", (result) => {
  console.log(result)
})

// 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력하기
const isOdd = (value, callback) => {
  callback(value % 2 != 0 ? "홀수" : "짝수")
}

sum(107, 200, (result) => {
  isOdd(result, print)
})

// 콜백 함수
// 15분
// 1) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
const multiply2 = (num, callback) => {
  callback(num * 2)
}

mul(20, 30, (result1) => {
  multiply2(result1, (result2) => {
    console.log(result2)
  })
})

// 2) 두 정수의 값 중 작은 값을 반환하여 출력
const getMinAndMax = (num1, num2, callback) => {
  let result = num1 == num2 ? "두 수는 같습니다" 
    : num1 < num2 ? `큰 수 ${num1}` : `작은 수 ${num2}`;

  callback(result)
}

getMinAndMax(100, 15, print)


// 20분
// 3) 문자열을 받아서 순서를 반대로 바꾼 후 출력

const reverseString = (str, callback) => {
  let result = "";
  for(let i = 0; i < str.length; i++){
    result += str.charAt(str.length - 1 - i)
  }
  callback(result) 
}

reverseString("콜백함수", print)


// 4) 사용자가 입력한 값까지 누적합한 후 5의 배수인지 확인 후 출력
const sumToInput = (input, callback) => {
  let result = 0;
  for(let i = 1; i <= input; i++){
    result += i;
  }
  callback(result)
}

const isMultipleOfFive = (value, callback) => {
  callback(value % 5 == 0 ? "5의 배수" : "5의 배수가 아닙니다") 
}

sumToInput(10, (total) => {
  isMultipleOfFive(total, print)
})

// 5) 1~100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력

const sumEven = (callback) => {
  let result = 0;
  for(let i = 0; i <= 50; i++){
    result += i * 2;
  }
  callback(result * 2)
}

sumEven((total) => { multiply2(total, print) })


// 다 푼 학생
// 6) 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력