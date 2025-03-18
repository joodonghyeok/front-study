// 프로토타입이란?
// 객체 생성자 함수에 의해 생성되는 객체들이 공유하는 속성과 메서드를 저장하는 특수한 객체

function User(name, age){
  this.name = name;
  this.age = age;
  this.hello = () => {
    console.log("안녕하세요!")
  }
}

const user1 = new User('홍길동', 20);
user1.hello()
const user2 = new User('장보고');
user2.hello()
const user3 = new User('이순신');
user3.hello()
const user4 = new User('김철수');
user4.hello()
const user5 = new User('김영희');


const member1 = { name : "홍길동" }
const member2 = { name : "장보고" }
const member3 = { name : "이순신" }

console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)

