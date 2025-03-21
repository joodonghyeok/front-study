// SyntaxError
// try ~ catch문으로 잡을 수 없음

try {
  let number = null;
  // number.toString()
  // console.log(number)ㅁ
  let numbers = new Array(-10)

} catch (error) {
  // name, message, stack

  if(error instanceof ReferenceError){
    console.error("값을 인식할 수 없습니다")
  }
  else if(error instanceof TypeError){
    console.error("잘못된 타입의 값으로 작업을 시도하고 있습니다.")
  }
  else if(error instanceof RangeError){
    console.error("잘못된 범위를 지정하였습니다.")
  }
  else {
    console.error("알 수 없는 오류 발생")
    console.error(error.name)
    console.error(error.message)
    console.error(error.stack)
  }
  console.log(error.name)
} finally {
  console.log("언제든 반드시 한 번 실행!! 😎")
}