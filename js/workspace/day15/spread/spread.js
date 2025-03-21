// spread (ES6문법)
//  -배열이나 객체에 사용이 가능한 문법, 각 데이터를 하니씩 들고와서 새로운 객체로 반환시킨다.


const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : {
    num1 : "대빵이",
    num2 : "보조"
  }
}

// camel = "낙타" 추가를 원함.
// 1depth 복사만 가능하다? 느낌인 거 같음


// const animals2 = {...animals, camel : "낙타"}

// animals2.tiger.num1 = "어흥이"
// animals2.dog = "점박이"
// console.log(animals)
// console.log(animals2)


// 배열

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]

// const numbers = [...arr1, ...arr2, ...arr3, 10] //ES6
// const numbers2 = arr1 .concat(arr2) .concat(arr3) //ES5 웹표준이다.
// arr1.push(arr2, arr3)
// const numbers3 = arr1.flat()
// console.log(numbers)
// console.log(numbers2)
// console.log(numbers3)

// ES10 .flat(차원수를 넣음으로써 내리려는 차원의 수를 넣으면 된다.) , flatMap()

const numbers4 = [...arr1, ...arr2, 100, ...arr3]

// 가장 큰 값을 찾기
// console.log(numbers4.sort((x,y) => y - x)[0])
// console.log(numbers4.sort((x,y) => x - y)[0])

// const max = Math.max(...numbers4)
// const min = Math.min(...numbers4)

// console.log(max, min)

// Math : 수학, 연산과 관련된 프로토타입
// round : 반올림
console.log(Math.round(1.8))
// ceil : 올림
console.log(Math.ceil(1.2))
// floor : 내림
console.log(Math.floor(1.78))
// random : 0~ 1까지 랜덤함 값이 나온다.
console.log(Math.random())
// toFixed : 소수점자리 
console.log((Math.random() * 45).toFixed(2))
