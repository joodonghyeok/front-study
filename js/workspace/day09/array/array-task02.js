// 실습 15분
// array 고차함수 사용!
// 1) 1~10까지 리스트에 담고 값을 하나씩 콘솔에 출력
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((data, index, datas) => { console.log(data); })
// 
Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).forEach((data, index, datas) => { console.log(data); })
// 
const li1 = []
for(let i = 1; i <= 10; i++){
  li1.push(i)
}
li1.forEach((data, index, datas) => { console.log(data); })
// 
new Array(10).fill(0).map((data, i, datas) => i + 1).forEach((data) => { console.log(data) })

// 2) 1~20까지 리스트에 담고 짝수의 합을 구하고 콘솔에 출력
// const li2 = new Array(20).fill(0)
// let total = 0;
// for(let i in li2){
//   let num = +i + 1;
// 
//   li2[i] = num
//   if(num % 2 == 0){
//     total += num
//   }
// }
// console.log(li2)
// console.log(total)

const li3 = new Array(20)
  .fill(0)
  .map((data, i, datas) => i + 1)
  .filter((data, i, datas) => data % 2 == 0)
// 
let total = 0;
li3.forEach((data) => {
  total += data;
})
console.log(total)

// 3) 1~100까지를 리스트에 담고 5의 배수만 리스트에 필터한 후 누적합을 출력
let total2 = 0
new Array(100)
  .fill(0)
  .map((data, i) => i + 1)
  .filter((data) => data % 5 == 0)
  .forEach((data) => {
    total2 += data
  })
  // 
console.log(total2)

// array 메서드 사용!
// 4) 전화번호 파라미터로 받아서 파싱하기
// ex) 010-1224-1225
// result) 010-****-1225

const parsePhone = (phone) => {
  if(phone.includes('-')){
    let parseNumber = phone.split('-');
    parseNumber[1] = "****";
    return parseNumber.join("-")
  }
  return "번호를 다시 입력하세요."
}

const result = parsePhone("010-2342-2346")
console.log(result)