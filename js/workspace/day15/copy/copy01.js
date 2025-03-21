const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이"
}

// 얕은 복사
const animals2 = animals

animals2.dog = "점박이"

console.log(animals)
console.log(animals2)

// 깊은 복사