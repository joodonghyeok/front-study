// .forEach()
// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기
// const datas = new Array(10).fill(0)
// datas.forEach((data, i, datas) => {
//   datas[i] = i + 1
//   if(i % 2 != 0){
//     console.log(i + 1)
//   }
// })

// // 2) 1~100까지 합을 출력하기
// const datas2 = new Array(100).fill(0)
// datas2.forEach((data, i, datas) => {
//   datas[i] = i + 1
// })

// let result = 0;
// datas2.forEach((data, i, datas) => {
//   result += data
// })
// console.log(result)

// 1) 1 ~ 100까지 배열에 담고, 짝수만 출력하기
new Array(100)
  .fill(0)
  .map((data, i) => i + 1)
  // 새롭게 리턴이 된 거다.
  .filter((data) => data % 2 == 0)
  .forEach((data) => console.log(data))

// 2) 1 ~ 100까지 배열에 담고, 홀수만 새로운 배열로 반환하기
const result = new Array(100)
  .fill(0)
  .map((data, i) => i + 1)
  // 
  .filter((data) => data % 2 == 1)

console.log(result)

// 3) 1 ~ 100까지 배열에 담고, 모든 값을 3배로 만들어서 반환하기
let result2 = new Array(100)
  .fill(0)
  .map((data, i) => i + 1)
  // 
  .map((data) => data * 3)

console.log(result2)








