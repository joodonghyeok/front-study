// 1. 문자열을 뒤집어 주는 함수 만들기
// ex) "abcdefg" -> "gfedcba"


const reverseString = (str) => {
  let result = "";
  for(let i = 0; i < str.length; i++){
    result += str[str.length - 1 - i]
  }
  return result
}

let data = "abcdefg"
let result1 = reverseString(data);
console.log(result1)

// 2. 사용자가 입력한 수 까지 반복 후 짝수의 합을 구해주는 함수
const getTotal = (count) => {
  let result = 0;
  for(let i =0; i <=count; i++){
    if(i%2 == 0){
      result += i;
    }
  }
  return result;
}

let result2 = getTotal(100);
console.log(result2)



// 3. 입력값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바a사" -> "가나다라마바사"
const removeA = (content) => {
  let result = ""
  for(let i =0; i < content.length; i++){
    if(content.charAt(i) !== "a"){
      console.log(contentcharAt(i))
    }
  }
  return result
}

let result3 = removeAt("apple")
console.log(result3)


// 4. 사용자가 입력한 값이 실수인지 정수인지 알려주는 함수

const isEvenAndOdd = (content) => {
  return content % 1 == 0 ? "정수" : "실수"
}

console.log(isEvenAndOdd(25))


// 플레티넘
// 심화 1
// 5. 0과 1을 마구잡이로 5개 전달했을 때
// 0과 1의 개수를 구하기
// ex) myFunc(0, 1, 0, 0, 1)
// 결과 : 0의 개수 3개, 1의 개수 2개 

const getCountZeroAndOne = (num1,num2,num3,num4,num5) =>{

  let countOne =0;
  let countZero = 5 - countOne;
  
  if(num1 == 0){
    countOne += 1
  }
  if(num2 == 0){
    countOne += 1
  }
  if(num3 == 0){
    countOne += 1
  }
  if(num4 == 0){
    countOne += 1
  }
  if(num5 == 0){
    countOne += 1
  }
  return `0의 갯수 ${countZero}, 1의 갯수 ${countOne}`
}





// 다이아
// 심화 2. 한글을 정수로 바꿔주는 함수
// "일공이사" -> "1024"
const changeToInt = (hangle) => {
  let hangles = "공일이삼사오육칠팔구";
  let result = "";
  for(let i = 0; i < hangle.length; i++){
    result += hangles.indexOf(hangle.charAt(i))
  }
  return result;
}

console.log(changeToInt("공삼육칠"))

// 심화 3. 정수를 한글로 바꿔주는 함수
// "1024" -> "일공이사"
const changeToHangle = (number) => {
  let hangles = "공일이삼사오육칠팔구"
  let result = "";
  for(let i = 0; i < number.length; i++){
    // hangles[number.charAt(i)]
    result += hangles.charAt(number.charAt(i));
  }
  return result;
}

console.log(changeToHangle("1025"))