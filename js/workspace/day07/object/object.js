// '', "" : 문자열

const obj = {
  name : "홍길동",
  age : 20,
  height : 190
}

// console.log(typeof(obj))
// console.log(obj.name)

// 객체 나이 출력
// console.log(obj.age)

obj.age = 10
// 마침표 접근법(닷, 점)
// console.log(obj.age)
// 대괄호 접근법
// 규칙성이 있을 때 사용한다
console.log(obj["age"])


const object1 = {};

const name = 0;
const object2 = new Object(); // 프로토타입


console.log(object1)
console.log(object2)