// 나이는 상수, 삼항 연산자
// 나이가 19살 이상이면 "입장 가능"을 출력
// 나이가 19살 미만이면 "입장 불가"를 출력

// 나이가 짝수면 "짝수"를 출력
// 나이가 홀수면 "홀수"를 출력

const age = 17;
const name = "김세환";
const baseAge = 19;
const pass = "입장 가능";
const notPass = "입장 불가";
const lucky = "당첨😎";
const unLucky = "꽝입니다";
const odd = "홀수";
const even = "짝수";

const isAdult = age >= 19;
const isEven = age % 2 === 0;
const isLucky = age === 16;

const adultResult = isAdult ? pass : notPass;
const evenResult = isEven ? even : odd;
const luckyResult = isLucky ? lucky : unLucky;

// 콘솔 결과 : [본인이름]님은 [입장 가능]
// [나이], [홀수], [꽝입니다].
const result = name + "님은 " + adultResult + "\n" + age + ", " + evenResult + ", " + luckyResult;
// console.log(result)


// &&, || 연산자 사용해보기
// 나이가 16살이면 "당첨"을 출력
// 아니면 "꽝입니다"를 출력

const result2 = isAdult && isEven 
  ? isLucky ? lucky : unLucky
   : "성인이 아닙니다";
console.log(result2)

