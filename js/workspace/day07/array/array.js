// 배열의 생성(선언)
const array1 = [] 
const array2 = new Array();
const array3 = new Array(10); // 
const array4 = Array.of("1", "2", "3") // 초기값을 알고 있을 때
// console.log(array2)
// console.log(array3)

// 배열의 배열 .length
// console.log(array4.length)
// console.log(array4[array4.length - 1])

// "".split()
// 매개변수를 기준으로 잘라서 배열로 리턴
const phoneNumber = "010-9999-5555"
const phone = phoneNumber.split("-").join("*");
// console.log(phone)

// .join()
// 전달된 매개변수를 기준으로 붙여서 새로운 문자열을 리턴
// console.log(phone.join("*"))

// .push()
// 기존의 배열에 값을 추가하는 메서드(기능)
const arr1 = ["홍길동", "장보고", "이순신"]
arr1.push("흰둥이")
// console.log(arr1)

// .concat()
// 두 배열을 [새로운 배열]로 리턴한다.

const arr2 = ["햄버거", "파스타", "스테이크"]
const arr3 = ["사이다", "콜라", "환타"]
// console.log(arr2 + arr3)
const arr4 = arr2.concat(arr3)
// console.log(arr4)

// console.log(arr4.length)

// for(let i = 0; i < arr4.length; i++){
//   console.log(arr4[i])
// }

// 빠른 for문, 향상된 for문
// for ~ in : 인덱스를 순차적으로 접근
// for ~ of : 값을 순차적으로 접근
// for(let food of arr4){
//   console.log(food)
// }

// for(let i in arr4){
//   console.log(arr4[i])
// }

// .pop()
// 배열의 마지막 값을 제거하고 그 값을 리턴
const arr5 = [1, 2, 3, 4, 5]
const arr6 = ["a", "b", "c"]
num = arr5.pop()
char = arr6.pop()
// console.log(num)
// console.log(arr5)

// .unshift()
// 배열의 맨 앞에 요소를 추가하는 메서드(기능)
const arr7 = [1, 2, 3, 4, 5]

// .shift()
// 배열의 맨 앞에 요소를 제거하고 그 값을 리턴 
arr7.unshift(6)
const deleteEl = arr7.shift()

// console.log(deleteEl)
// console.log(arr7)


// .slice(시작 인덱스, 종료 인덱스)
// 시작 인덱스부터, 종료 인덱스까지 복사해서 [새로운 배열]을 리턴
// 단, 종료 인덱스는 포함하지 않는다.

const arr8 = [10, 20, 30, 40, 50, 60, 70, 80]
const arr9 = arr8.slice(2, 5)
const arr10 = arr8.slice(-2, -1)
// console.log(arr8)
// console.log(arr9)
// console.log(arr10)

// .splice(시작 인덱스, 지울 요소 개수, 추가되는 요소)
const arr11 = arr8.splice(0, 5, "a", "b", "c", "d")
// console.log(arr11)
// console.log(arr8)

// .sort()
// 배열을 정렬 후 배열로 리턴
// .reverse()
// 배열의 순서를 반대로 뒤집어주고 배열을 리턴
const arr12 = [100, 150, 15, 200, 600, 700, 20, 40].sort((a, b) => a - b).reverse()
// console.log(arr12)

// string, array
// console.log(arr12.includes(100))
// console.log("apple".includes("c"))

// .indexOf()
// console.log(arr12.indexOf(1000))

// =====================================================================================
// 배열의 고차함수
// .forEach(callback(배열값, 인덱스, 배열) => { 실행할 로직; }) : 반복문
// console.log(datas1)

let datas1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// datas1.forEach((data/*, i, datas*/) => {
//   console.log("data", data)
//   // console.log("index", i)
//   // console.log("datas", datas)
// })

// datas1.forEach((_, i) => {
//   console.log("index", i)
//   // console.log("index", i)
//   // console.log("datas", datas)
// })

// console.log(datas1)
datas1.forEach((data, i, datas) => {
  datas[i] = data * 2
})
// console.log(datas1)

// * .map(callback(배열값, 인덱스, 배열) => { 반드시 return이 존재해야 한다. }) 
// 값을 수정(리턴)하여 새로운 배열로 리턴
const datas2 = [1, 2, 3, 4, 5]
// console.log(datas2.map((data, i, datas) => { return data * 10 }))
// console.log(datas2.map((data, i, datas) => data * 10))
const newDatas2 = datas2.map((data) => data * 10)
// console.log(newDatas2)

// .filter(callback(배열값, 인덱스, 배열) => 조건식이 true일때만 해당 값을 리턴)
// 조건을 만족하는 값들만 모아서 새로운 배열로 리턴

const datas3 = [10, 20, 30, 40, 50, 60]
const newDatas3 = datas3.filter((data) => data === 30)
console.log(newDatas3)

// .find(callback(배열값, 인덱스, 배열) => 조건식)
// 조건식을 만족하는 첫 번째 값을 리턴
console.log(datas3.find((data) => data % 20 === 0))

// .some()
// .some(callback(배열값, 인덱스, 배열) => 조건식)
// 조건식을 만족하는 값이 하나라도 있으면 true, 하나도 없으면 false
console.log(datas3.some((data) => data % 20 === 0))
