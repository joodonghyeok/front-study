// 브론즈
// 1. 어떤 값을 받으면 값을 출력해주는 함수

// function printValue2(){}
// const printValue3 = () => {} 

// const printValue = (value) => {
//   console.log(value)
// }

// printValue("안녕하세요😎")

// 2. 3개의 정수를 받아서 3개의 정수를 모두 빼주고 값을 반환(리턴)하는 함수
// 디폴트 파라미터

// 함수의 scope
// const subtract = (num1 = 0, num2 = 0, num3 = 0) => {
//   return num1 - num2 - num3;
// }

// let result2 = subtract(10, 20)
// console.log(result2)


// 실버
// 1. 홍길동을 n번 출력해주는 함수

// (횟수) n은 매개변수
// function printHongBy5(count){
//   for(let i = 0; i < count; i++){
//     console.log("홍길동")
//   }
// }

// printHongBy5(3)

// 2. 사용자가 입력한 정수까지 모두 더해서 값을 알려주는 함수 (매개변수)
// ex) sum(10) 1 + 2 ... + 10 == 55

// 1) 사용자가 입력한 정수를 매개변수로 받는다
// 2) 입력한 횟수를 알기 때문에 for문 (반복문)
// 3) 모든 결과값을 담을 변수가 필요하다. (result)
// 4) i <= count 사용자가 입력한 값을 포함해야 하므로 "="가 필요하다.
// 5) result에 반복하는 횟수만큼의 i를 모두 더한다.
// 6) return 한다.

// function totalToCount(count){
//   let result = 0;
//   for(let i = 0; i <= count; i++){
//     // result = result + i;
//     result += i;
//   }
//   return result;
// }


// let result = totalToCount(10)
// console.log(result)



// 골드
// 1. 1~n까지 홀수만 출력해주는 함수
const printOdd = (count) => {
  for(let i = 0; i <= count; i++){
    if(i % 2 == 0){ continue };
    console.log(i)
  }
}

printOdd(10)

// 2. 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수
// "abcde".charAt(0) == a
const getCount = (content, char) => {
  let count = 0;
  for(let i = 0; i < content.length; i++){
    if(content[i] == char){
      count++
    }
  }
  return count;
}

console.log("abcdefg".length)

let char = "p"
let content = "apple"
let count = getCount("apple", "p")
console.log(`[${content}]에서 찾는 문자 [${char}]의 개수는 [${count}]`)


