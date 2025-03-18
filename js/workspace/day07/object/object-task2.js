// 12분
// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

function User(name, age, point){
  this.name = name;
  this.age = age;
  this.point = point;
}
// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
// 마트 고객들의 포인트를 출력한다.

const mart = new Object()
mart.user1 = new User('홍길동', 30, 3500)
mart.user2 = new User('이순신', 22, 0)
mart.user3 = new User('장보고', 66, 9500)

let totalPoint =  0
for(let i in mart){
  // console.log(mart[i]["point"])
  totalPoint += mart[i].point
}
console.log(`모든 mart의 고객의 포인트 총 합 : ${totalPoint}`)
