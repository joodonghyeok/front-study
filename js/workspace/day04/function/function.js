// 실습
// 1) 2개의 정수를 받아서 2개를 빼주는 결과값을 반환(리턴)하는 함수
// ~하겠다.
function subtract(num1, num2){
  return num1-num2
}

let result1 = subtract(10,20)

// 2) 성과 이름을 받아서 성과 이름을 붙여서 출력해주는 함수
function getFullName(lastName, firstName){
  console.log(lastName + firstName)
}

getFullName("주", "동혁")

// 3) 5개 정수를 받아서 모두 더한 결과값을 반환(리턴)하는 함수
function sum(num1,num2,num3,num4,num5){
  let total = 0;
  total += num1
  total += num2
  total += num3
  total += num4
  total += num5
  return total
}

let result3 = sum(1,2,3,4,5)

// 4) 이름을 전달하면 이름을 5번 출력해주는 함수
function printName(name){
  for(let i = 0; i < 5; i++){
    console.log(name)
  }
}

printName("주동혁")

test2()

// 즉시 실행함수:()() 이런게 있다고 생각하고 넘어가면 된다.

(function(){
  console.log("선언과 동시에 실행하는 로직")
})()


// 화살표 함수(ES6)
function sum2(num1,num2){
  return num1 + num2
}
// 2개가 같다.
const sum2 = (num1, num2) => {return num1 + num2}