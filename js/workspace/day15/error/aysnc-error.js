// 대표적인 비동기 함수
// setTimeout
//   -몇 초 뒤에 실행

// setInterval
//   -몇 초마다 실행

// clearInterval
//   -반복되는 Interval을 삭제

// 비동기 코드는 try~catch로 예외를 잡을 수 없다.

// try {
//   setTimeout(() => {
//     console.log("3초 뒤에 실행😎")
//     badRunTimeCode;
//   }, 3000)
  
// } catch (error) {
//   if(error instanceof ReferenceError){
//     console.log("값을 찾을 수 없습니다😂")

//   }
// }

// 비동기 함수 내부에서 에러를 잡아야 한다.

setTimeout(() => {
  try {
    console.log("3초 뒤에 실행😎")
    badRunTimeCode;
  } catch (error) {
    if(error instanceof ReferenceError){
      console.log("값을 찾을 수 없습니다😂")
    }
  }
}, 3000) 