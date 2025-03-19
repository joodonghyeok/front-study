// 1) 초기값으로 10, 20, 30, 40, 50을 넣고 내림차순으로 정렬후 출력
// const li1 = Array.of(10, 20, 30, 40, 50).reverse();
// console.log(li1)

// 2) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력
// const li2 = new Array(10).fill(0).map((data, i) => i + 1).map((num) => num > 5 ? num * 2 : num)
// console.log(li2)

// 3) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 값을 문자열로 리턴하기
const li3 = new Array(30).fill(0).map((data, i) => i + 1).filter((data) => data % 2 != 0).join("*")
// console.log(li3)
// ex) let arrayTask1 = 1*3*5*7*9

// 4) arrayTask1에 들어간 값에 "*"를 제거한 후 배열에 담아 기존 값을 2배로 변경 후 출력
// li3.split("*").map((data) => data * 2).forEach((data) => { console.log(data )})

// 5) 1~20까지 배열에 담고 배열에 들어간 값 중 뒤에서 5개 값을 더한 후 출력
const li4 = new Array(20).fill(0).map((data, i) => i + 1).slice(-5).reduce((prev, current, index, datas) => {
  return prev += current
})
console.log(li4)